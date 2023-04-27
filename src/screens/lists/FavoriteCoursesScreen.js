import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCellCourse from '../../components/ListCellCourse';
import SearchBox from '../../components/SearchBox';
import SpacerLine from '../../components/SpacerLine';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { API } from 'aws-amplify';
import { listFavoriteCourses, listCourses } from '../../graphql/queries';
import getCurrentUser from '../../functions/getCurrentUser';
import searchItems from '../../functions/searchItems';

const FavoriteCoursesScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [favoriteCourses, setFavoriteCourses] = useState();
    const [allFavoriteCourses, setAllFavoriteCourses] = useState();
    const coursesIcon = require('./../../assets/icons/courses.png');

    // executes once for loading data from aws
    useEffect(() => {
        fetchFavoriteCourses();

        // refresh screen if data has been changed
        const willFocusSubscription = navigation.addListener('focus', () => {
            fetchFavoriteCourses();
        });

        return willFocusSubscription;
    }, []);

    const fetchFavoriteCourses = async () => {
        try {
            const user = await getCurrentUser();
            let filter = { username: { eq: user.username } };
            let results = await API.graphql({ query: listFavoriteCourses, variables: { filter: filter } });

            var courseIds = [];
            results.data?.listFavoriteCourses.items.forEach((item) => {
                if (item['_deleted'] == null) {
                    courseIds.push(item.courseId);
                }
            });

            let resultsCourses = await API.graphql({ query: listCourses });
            var courses = [];
            resultsCourses.data?.listCourses.items.forEach((course) => {
                if (courseIds.indexOf(course.id) > -1) {
                    courses.push(course);
                }
            });
            setFavoriteCourses(courses);
            setAllFavoriteCourses(courses);
        } catch (e) {
            console.log("Failed to fetch booked courses due to: '" + JSON.stringify(e) + "'");
        }
    };

    const searchFunc = (text) => {
        setSearch(text);
        setFavoriteCourses(searchItems(allFavoriteCourses, text));
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
                            Deine Favoriten
                        </Text>
                        <Image
                            source={coursesIcon}
                            style={{ width: 70, height: 70, marginTop: -16, marginLeft: 20, resizeMode: 'contain' }} />
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
            {(favoriteCourses) ?
                <FlatList
                    marginTop={10}
                    snapToInterval={Dimensions.get('screen').width}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    vertical
                    data={favoriteCourses}
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

export default FavoriteCoursesScreen;