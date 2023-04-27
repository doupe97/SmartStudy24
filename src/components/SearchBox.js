import React, { useState } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';

const SearchBox = (props) => {

    const [searchText, setSearchText] = useState("");

    return (
        <View flexDirection="row">
            <View marginTop={16} marginLeft={14}>
                <Icon name="search" size={35} color={Colors.dark} />
            </View>
            <TextInput
                style={Styles.searchBox}
                placeholder={props.placeholderText}
                placeholderTextColor={Colors.middleGrey}
                autoFocus={true}
                onChangeText={props.handleChange}
                value={props.searchText}
            />
        </View>
    );
};

export default SearchBox;