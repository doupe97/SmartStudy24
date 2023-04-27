import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCellMember from '../../components/ListCellMember';
import SearchBox from '../../components/SearchBox';
import SpacerLine from '../../components/SpacerLine';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { API } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';
import searchItems from '../../functions/searchItems';

const MembersScreen = ({ navigation, route }) => {

    const groupMembers = route.params;
    const [search, setSearch] = useState('');
    const [members, setMembers] = useState();
    const [allMembers, setAllMembers] = useState();
    const membersIcon = require('./../../assets/icons/members.png');

    // executes once for loading data from aws
    useEffect(() => {
        fetchMembers();
    }, []);

    async function fetchMembers() {
        var members = [];
        for (const member of groupMembers) {
            let filter = { username: { eq: member } };
            let result = await API.graphql({ query: listStudents, variables: { filter: filter } });
            members.push(result.data?.listStudents.items[0]);
        }
        setMembers(members);
        setAllMembers(members);
    }

    const searchFunc = (text) => {
        setSearch(text);
        setMembers(searchItems(allMembers, text, "firstname"));
    };

    return (
        <ScrollView backgroundColor={Colors.secondary}>
            <View flexDirection="row" marginTop={70} marginLeft={20} marginBottom={10}>
                <Icon
                    name="arrow-back-ios"
                    size={36}
                    color={Colors.dark}
                    onPress={navigation.goBack} />
                <View flexDirection="column">
                    <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
                        <Text style={Styles.headLineScreen}>
                            Mitglieder
                        </Text>
                        <Image
                            source={membersIcon}
                            style={{ width: 70, height: 70, marginTop: -16, marginLeft: 90, resizeMode: 'contain' }} />
                    </View>
                    <SearchBox
                        placeholderText={"Mitglied suchen ..."}
                        handleChange={(text) => searchFunc(text)} searchText={search}
                    />
                </View>
            </View>
            <SpacerLine
                lineHeight={0.8}
                lineColor={Colors.middleGrey}
                lineWidth={360} />
            {(members) ?
                <FlatList
                    marginTop={10}
                    snapToInterval={Dimensions.get('screen').width}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    vertical
                    data={members}
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.8}>
                            <ListCellMember member={item} />
                            <SpacerLine
                                lineHeight={0.8}
                                lineColor={Colors.middleGrey}
                                lineWidth={360} />
                        </TouchableOpacity>}
                /> :
                <ActivityIndicator></ActivityIndicator>
            }
        </ScrollView>
    );
};

export default MembersScreen;