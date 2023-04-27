import React from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator
} from 'react-native';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';

const ListCellMember = ({ member }) => {

    if (!member) {
        return (
            <ActivityIndicator></ActivityIndicator>
        );
    } else {
        return (
            <View style={Styles.listCellMember}>
                <Image
                    source={require('../assets/icons/member.png')}
                    style={{ width: 40, height: 40, borderRadius: 4, marginTop: 3 }} />
                <View flexDirection="column" >
                    <Text style={{
                        marginLeft: 22,
                        marginTop: -4,
                        fontSize: 24,
                        maxWidth: '95%',
                        fontWeight: 'bold',
                        color: Colors.dark
                    }}>
                        {member.firstname + " " + member.lastname}
                    </Text>
                    <Text style={{
                        marginLeft: 22,
                        marginTop: 4,
                        fontSize: 18,
                        maxWidth: '95%',
                        fontWeight: 'bold',
                        color: Colors.dark
                    }}>
                        {member.mainStudyTopic + " (" + member.semesterNumber + ".)"}
                    </Text>
                </View>
            </View>
        );
    }
};

export default ListCellMember;