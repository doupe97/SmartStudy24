import React from 'react';
import { View } from 'react-native';
import Colors from '../res/ui/Colors';

const SpacerLine = ({ lineHeight = 2, lineColor = Colors.middleGrey, lineWidth = 350 }) => {
    return (
        <View
            style={{
                marginTop: 4,
                marginBottom: 20,
                alignSelf: "center",
                width: lineWidth,
                borderBottomColor: lineColor,
                borderBottomWidth: lineHeight,
            }}
        />
    );
};

export default SpacerLine;