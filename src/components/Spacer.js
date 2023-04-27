import React from 'react';
import { View } from 'react-native';

const Spacer = ({ height = 30 }) => {
    return (
        <View style={{ marginBottom: height }} />
    );
};

export default Spacer;