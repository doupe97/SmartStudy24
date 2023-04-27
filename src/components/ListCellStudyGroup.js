import React from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';
import setImage from '../functions/setImage';

const ListCellStudyGroup = ({ group }) => {

    if (!group) {
        return (
            <ActivityIndicator></ActivityIndicator>
        );
    } else {

        const membersIcon = require('./../assets/icons/members.png');

        return (
            <View style={Styles.listCellCourse}>
                <Image
                    source={setImage(group.imageFileName)}
                    style={{ width: 120, height: 120, borderRadius: 10 }} />
                <View flexDirection="column" >
                    <Text style={{
                        marginLeft: 25,
                        fontSize: 24,
                        maxWidth: 180,
                        fontWeight: 'bold',
                        color: Colors.dark
                    }}>
                        {group.name}
                    </Text>
                    <View flexDirection="row" marginLeft={25} marginTop={2}>
                        <Image
                            source={membersIcon}
                            style={{ width: 40, height: 40, marginTop: 6, resizeMode: 'contain' }} />
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 14,
                            fontSize: 20,
                            maxWidth: '80%',
                            fontWeight: 'bold',
                            color: Colors.dark
                        }}>
                            {group.members.length + " Mitglieder"}
                        </Text>
                    </View>
                </View>
                <View style={Styles.listCellDetailsAccessorStudyGroupInfo}>
                    <Icon
                        name="arrow-forward-ios"
                        size={30}
                        color={Colors.middleGrey}
                    />
                </View>
            </View>
        );
    }
};

export default ListCellStudyGroup;