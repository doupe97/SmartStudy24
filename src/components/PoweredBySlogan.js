import React from 'react';
import { Text } from 'react-native';
import Colors from '../res/ui/Colors';

const PoweredBySlogan = ({ marginTop = 310, fontSize = 15, fgColor = Colors.white }) => {
    return (
        <Text style={{ color: fgColor, fontSize: fontSize, fontWeight: 'bold', lineHeight: 50, marginTop: marginTop, marginLeft: 36 }}>
            Powered by SmartStudy24
        </Text>
    );
};

export default PoweredBySlogan;