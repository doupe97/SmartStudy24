import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';
import setImage from '../functions/setImage';

const ListCellTutor = ({ tutor }) => {

  const learningHutIcon = require('./../assets/icons/learningHut.png');

  return (
    <View style={Styles.listCellTutor}>
      <Image
        source={setImage(tutor.imageFileName)}
        style={{ width: 70, height: 70, borderRadius: 200 / 2 }} />
      <View flexDirection="column" marginTop={5}>
        <Text style={{
          marginLeft: 25,
          fontSize: 22,
          maxWidth: '90%',
          fontWeight: 'bold',
          color: Colors.dark
        }}>
          {tutor.firstname + " " + tutor.lastname}
        </Text>
        <View flexDirection="row" marginLeft={25} marginTop={2}>
          <Image
            source={learningHutIcon}
            style={{ width: 30, height: 30, marginTop: 6, resizeMode: 'contain' }} />
          <Text style={{
            marginLeft: 10,
            marginTop: 6,
            fontSize: 18,
            maxWidth: '80%',
            fontWeight: 'bold',
            color: Colors.dark
          }}>
            {tutor.topics[0]}
          </Text>
        </View>
      </View>
      <View style={Styles.listCellDetailsAccessor}>
        <Icon
          name="arrow-forward-ios"
          size={30}
          color={Colors.middleGrey}
        />
      </View>
    </View>
  );
};

export default ListCellTutor;