import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../res/ui/Colors';
import Styles from '../res/ui/Styles';

const ListCategories = ({ nav }) => {

    // array with icon infos
    const categoryIcons = [
        <Icon name="book" size={32} color={Colors.white} />,
        <Icon name="favorite" size={32} color={Colors.white} />,
        <Icon name="people" size={32} color={Colors.white} />,
        <Icon name="school" size={32} color={Colors.white} />
    ];

    // array with target screen names 
    const list = [
        "BookedCoursesScreen",
        "FavoriteCoursesScreen",
        "StudyGroupsScreen",
        "TutorsScreen"
    ];

    // returns touchable icons which open the target screen provided by the upper arrays
    return (
        <View style={Styles.categoryContainerCard}>
            {categoryIcons.map((icon, index) => (
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { nav.navigate(list[index], icon) }}>
                    <View key={index} style={Styles.iconContainerCard}>
                        {icon}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ListCategories;