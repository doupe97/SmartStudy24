import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    Image,
    Pressable,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import setImage from '../../functions/setImage';
import SpacerLine from '../../components/SpacerLine';
import { API } from 'aws-amplify';
import { updateStudyGroup } from '../../graphql/mutations';
import getCurrentUser from '../../functions/getCurrentUser';

const DetailsStudyGroupScreen = ({ navigation, route }) => {

    const group = route.params;
    const [loading, setLoading] = useState(false);
    const [isCurrentUserMember, setIsCurrentUserMember] = useState(false);
    const membersIcon = require('../../assets/icons/members.png');
    const groupIcon = require('../../assets/icons/group.png');
    const joinIcon = require('../../assets/icons/join.png');
    const leaveIcon = require('../../assets/icons/leave.png');
    const whatsappIcon = require('../../assets/icons/whatsapp.png');
    const teamsIcon = require('../../assets/icons/teams.png');

    // executes once for loading data from aws
    useEffect(() => {
        checkCurrentUserMemberState();
    }, []);

    const checkCurrentUserMemberState = async () => {
        const user = await getCurrentUser();
        setIsCurrentUserMember(group.members.indexOf(user.username) > -1);
    };

    const onJoinPressed = async () => {
        if (loading) { return; }
        setLoading(true);

        try {
            const user = await getCurrentUser();
            const versionToUpdate = group["_version"];
            group.members.push(user.username);

            // update study group members
            const updateItem = {
                id: group.id,
                name: group.name,
                info: group.info,
                members: group.members,
                imageFileName: group.imageFileName,
                "_version": versionToUpdate
            };
            await API.graphql({ query: updateStudyGroup, variables: { input: updateItem } });
        } catch (e) {
            Alert.alert('Fehler beim Beitreten', e.message);
        }
        setIsCurrentUserMember(true);
        setLoading(false);
    };

    const onLeavePressed = async () => {
        if (loading) { return; }
        setLoading(true);

        try {
            const user = await getCurrentUser();
            const versionToUpdate = group["_version"];
            group.members = group.members.filter(member => member !== user.username);

            // update study group members
            const updateItem = {
                id: group.id,
                name: group.name,
                info: group.info,
                members: group.members,
                imageFileName: group.imageFileName,
                "_version": versionToUpdate
            };
            await API.graphql({ query: updateStudyGroup, variables: { input: updateItem } });
        } catch (e) {
            Alert.alert('Fehler beim Verlassen', e.message);
        }
        setIsCurrentUserMember(false);
        setLoading(false);
    };

    return (
        <View style={{ flex: 0.8 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={{ flex: 0.5 }} source={setImage(group.imageFileName)}>
                <View style={Styles.headerDetails}>
                    <Icon
                        name="arrow-back-ios"
                        size={36}
                        color={Colors.white}
                        onPress={navigation.goBack}
                    />
                </View>
            </ImageBackground>
            <View style={Styles.detailsContainer}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={groupIcon}
                            style={{ width: 48, height: 48, marginTop: 6, resizeMode: 'contain' }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 34,
                                    fontWeight: 'bold',
                                    color: Colors.dark,
                                    marginBottom: 25,
                                    marginLeft: 20,
                                    marginTop: 8,
                                    maxWidth: '90%'
                                }}>
                                {group.name}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 10 }}>
                                <Pressable onPress={(isCurrentUserMember) ? onLeavePressed : onJoinPressed}>
                                    <View style={Styles.joinLeaveButton}>
                                        <Image
                                            source={(isCurrentUserMember) ? leaveIcon : joinIcon}
                                            style={{ width: 20, height: 20, marginTop: 7, resizeMode: 'contain' }} />
                                        {(isCurrentUserMember) ?
                                            <Text style={{ fontSize: 18, color: Colors.white, marginLeft: 20, fontWeight: 'bold', marginTop: 5 }}>
                                                {loading ? 'Verlassen ...' : 'Verlassen'}
                                            </Text> :
                                            <Text style={{ fontSize: 18, color: Colors.white, marginLeft: 20, fontWeight: 'bold', marginTop: 5 }}>
                                                {loading ? 'Beitreten ...' : 'Beitreten'}
                                            </Text>
                                        }
                                    </View>
                                </Pressable>
                                {(isCurrentUserMember) ?
                                    <Image
                                        source={whatsappIcon}
                                        style={{ width: 35, height: 35, marginLeft: 10, marginTop: -20, resizeMode: 'contain' }} />
                                    : <View></View>
                                }
                                {(isCurrentUserMember) ?
                                    <Image
                                        source={teamsIcon}
                                        style={{ width: 32, height: 32, marginLeft: 10, marginTop: -18, resizeMode: 'contain' }} />
                                    : <View></View>
                                }
                            </View>
                        </View>
                    </View>
                    <SpacerLine lineHeight={1.6}></SpacerLine>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                        Was machen wir hier?
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 16,
                        marginBottom: 20,
                        fontSize: 22,
                        textAlign: 'justify',
                        lineHeight: 26
                    }}>
                    {group.info}
                </Text>
                <SpacerLine lineHeight={2}></SpacerLine>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => navigation.navigate('MembersScreen', group.members)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={membersIcon}
                            style={{ width: 42, height: 42, marginTop: 6, resizeMode: 'contain' }} />
                        {(true) ?
                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 14,
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    color: Colors.dark
                                }}>
                                {group.members.length + " Mitglieder"}
                            </Text> :
                            <ActivityIndicator color={Colors.dark}></ActivityIndicator>}
                        <View style={Styles.listCellDetailsAccessorStudyGroup}>
                            <Icon
                                name="arrow-forward-ios"
                                size={30}
                                color={Colors.middleGrey}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DetailsStudyGroupScreen;