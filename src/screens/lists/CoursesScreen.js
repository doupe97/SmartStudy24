import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCellCourse from '../../components/ListCellCourse';
import SearchBox from '../../components/SearchBox';
import SpacerLine from '../../components/SpacerLine';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { API, graphqlOperation } from 'aws-amplify';
import { listCourses } from './../../graphql/queries';
import searchItems from '../../functions/searchItems';

const CoursesScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [learningCourses, setLearningCourses] = useState();
    const [allCourses, setAllCourses] = useState();
    const coursesIcon = require('./../../assets/icons/courses.png');

    // executes once for loading data from aws
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            let results = await API.graphql(graphqlOperation(listCourses));
            setLearningCourses(results.data?.listCourses.items);
            setAllCourses(results.data?.listCourses.items);
        } catch (e) {
            console.log("Failed to fetch courses due to: '" + JSON.stringify(e) + "'");
        }
    };

    const searchFunc = (text) => {
        setSearch(text);
        setLearningCourses(searchItems(allCourses, text));
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
                            Verfügbare Nachhilfekurse
                        </Text>
                        <Image
                            source={coursesIcon}
                            style={{ width: 70, height: 70, marginLeft: 26, resizeMode: 'contain' }} />
                    </View>
                    <SearchBox
                        placeholderText={"Kurs suchen ..."}
                        handleChange={(text) => searchFunc(text)} searchText={search}
                    />
                </View>
            </View>
            <SpacerLine
                lineHeight={0.8}
                lineColor={Colors.middleGrey}
                lineWidth={360} />
            {(learningCourses) ?
                <FlatList
                    marginTop={10}
                    snapToInterval={Dimensions.get('screen').width}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    vertical
                    data={learningCourses}
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => navigation.navigate('DetailsCourseScreen', item)}>
                            <ListCellCourse course={item} />
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

export default CoursesScreen;