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
import { API } from 'aws-amplify';
import { listBookedCourses, listCourses } from '../../graphql/queries';
import getCurrentUser from '../../functions/getCurrentUser';
import searchItems from '../../functions/searchItems';

const BookedCoursesScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [bookedCourses, setBookedCourses] = useState();
    const [allBookedCourses, setAllBookedCourses] = useState();
    const coursesIcon = require('./../../assets/icons/courses.png');

    // executes once for loading data from aws
    useEffect(() => {
        fetchBookedCourses();
    }, []);

    const fetchBookedCourses = async () => {
        try {
            const user = await getCurrentUser();
            let filter = { username: { eq: user.username } };
            let results = await API.graphql({ query: listBookedCourses, variables: { filter: filter } });

            var courseIds = [];
            results.data?.listBookedCourses.items.forEach((item) => {
                courseIds.push(item.courseId);
            });

            let resultsCourses = await API.graphql({ query: listCourses });
            var courses = [];
            resultsCourses.data?.listCourses.items.forEach((course) => {
                if (courseIds.indexOf(course.id) > -1) {
                    courses.push(course);
                }
            });
            setBookedCourses(courses);
            setAllBookedCourses(courses);
        } catch (e) {
            console.log("Failed to fetch booked courses due to: '" + JSON.stringify(e) + "'");
        }
    };

    const searchFunc = (text) => {
        setSearch(text);
        setBookedCourses(searchItems(allBookedCourses, text));
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
                            Gebuchte Kurse
                        </Text>
                        <Image
                            source={coursesIcon}
                            style={{ width: 70, height: 70, marginTop: -10, marginLeft: 16, resizeMode: 'contain' }} />
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
            {(bookedCourses) ?
                <FlatList
                    marginTop={10}
                    snapToInterval={Dimensions.get('screen').width}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    vertical
                    data={bookedCourses}
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

export default BookedCoursesScreen;