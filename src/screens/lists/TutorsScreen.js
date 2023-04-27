import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCellTutor from '../../components/ListCellTutor';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import SpacerLine from '../../components/SpacerLine';
import { API, graphqlOperation } from 'aws-amplify';
import { listTutors } from './../../graphql/queries';
import SearchBox from '../../components/SearchBox';
import searchItems from '../../functions/searchItems';

const TutorsScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [tutors, setTutors] = useState();
    const [allTutors, setAllTutors] = useState();
    const teacherIcon = require('./../../assets/icons/teacher.png');

    // executes once for loading data from aws dynamoDB
    useEffect(() => {
        // calls function to fetch tutors from tutors table in dynamoDB
        fetchTutors();
    }, []);

    // function for fetching tutors 
    const fetchTutors = async () => {
        try {
            // calls aws dynamoDB
            let results = await API.graphql(graphqlOperation(listTutors));

            // sets local state variable to fetched data
            setTutors(results.data?.listTutors.items);
            setAllTutors(results.data?.listTutors.items);
        } catch (e) {
            console.log("Failed to fetch tutors due to: '" + JSON.stringify(e) + "'");
        }
    };

    // search function 
    const searchFunc = (text) => {

        // store search term / text in local state variable
        setSearch(text);
        
        // performs search and stores result(s) in local state variable
        setTutors(searchItems(allTutors, text, "firstname"));
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={Styles.headLineScreen}>
                            Deine Tutoren
                        </Text>
                        <Image
                            source={teacherIcon}
                            style={{ width: 70, height: 70, marginTop: -16, marginLeft: 40, resizeMode: 'contain' }} />
                    </View>
                    <SearchBox
                        placeholderText={"Tutor suchen ..."}
                        handleChange={(text) => searchFunc(text)} searchText={search}
                    />
                </View>
            </View>
            <SpacerLine
                lineHeight={0.8}
                lineColor={Colors.middleGrey}
                lineWidth={360} />
            {(tutors) ?
                <FlatList
                    marginTop={10}
                    snapToInterval={Dimensions.get('screen').width}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    vertical
                    data={tutors}
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => navigation.navigate('DetailsTutorScreen', item)}>
                            <ListCellTutor tutor={item} />
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

export default TutorsScreen;