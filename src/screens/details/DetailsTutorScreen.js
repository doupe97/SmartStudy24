import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import setImage from '../../functions/setImage';

const DetailsTutorScreen = ({ navigation, route }) => {

  const tutor = route.params;
  console.log("Tutor Details: " + JSON.stringify(tutor));

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 0.7 }}
        source={require('../../assets/backgrounds/red.jpg')}>
        <View style={Styles.headerDetails}>
          <Icon
            name="arrow-back-ios"
            size={36}
            color={Colors.white}
            onPress={navigation.goBack} />
        </View>
        <View alignItems='center'>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={setImage(tutor.imageFileName + ".png")} />
        </View>
      </ImageBackground>
      <View style={Styles.detailsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="person" size={30} color={Colors.primary} />
          <Text style={Styles.tutorTitle}>
            {tutor.firstname + " " + tutor.lastname + " (" + tutor.age + ")"}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Icon name="looks-one" size={30} color={Colors.primary} />
          <Text style={Styles.tutorMostTopic}>
            {tutor.topics[0]}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 14 }}>
          <Icon name="looks-two" size={30} color={Colors.primary} />
          <Text style={Styles.tutorMostTopic}>
            {tutor.topics[1]}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 14 }}>
          <Icon name="looks-3" size={30} color={Colors.primary} />
          <Text style={Styles.tutorMostTopic}>
            {tutor.topics[2]}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
            Über mich
          </Text>
          <View style={{ flexDirection: 'row', marginTop: -5 }}>
            <Icon name="star" size={36} color={Colors.primary} />
            <Text
              style={{
                color: Colors.dark,
                fontWeight: 'bold',
                fontSize: 22,
                marginTop: 5,
                marginLeft: 5
              }}>
              {tutor.recommendation}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 22, textAlign: 'justify', lineHeight: 24, marginTop: 12 }}>
          {tutor.info}
        </Text>
      </View>
    </View>
  );
};

export default DetailsTutorScreen;