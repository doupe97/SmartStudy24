import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCellStudyGroup from '../../components/ListCellStudyGroup';
import SearchBox from '../../components/SearchBox';
import SpacerLine from '../../components/SpacerLine';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { API, graphqlOperation } from 'aws-amplify';
import { listStudyGroups } from '../../graphql/queries';
import searchItems from '../../functions/searchItems';

const StudyGroupsScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [studyGroups, setStudyGroups] = useState();
    const [allStudyGroups, setAllStudyGroups] = useState();
    const coursesIcon = require('./../../assets/icons/courses.png');

    // executes once for loading data from aws
    useEffect(() => {
        fetchStudyGroups();
    }, []);

    const fetchStudyGroups = async () => {
        try {
            let result = await API.graphql(graphqlOperation(listStudyGroups));
            setStudyGroups(result.data?.listStudyGroups.items);
            setAllStudyGroups(result.data?.listStudyGroups.items);
        } catch (e) {
            console.log("Failed to fetch study groups due to: '" + JSON.stringify(e) + "'");
        }
    };

    const searchFunc = (text) => {
        setSearch(text);
        setStudyGroups(searchItems(allStudyGroups, text));
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
                            Lerngruppen
                        </Text>
                        <Image
                            source={coursesIcon}
                            style={{ width: 70, height: 70, marginTop: -16, marginLeft: 50, resizeMode: 'contain' }} />
                    </View>
                    <SearchBox
                        placeholderText={"Gruppe suchen ..."}
                        handleChange={(text) => searchFunc(text)} searchText={search}
                    />
                </View>
            </View>
            <SpacerLine
                lineHeight={0.8}
                lineColor={Colors.middleGrey}
                lineWidth={360} />
            <FlatList
                marginTop={10}
                snapToInterval={Dimensions.get('screen').width}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
                vertical
                data={(studyGroups) ? studyGroups : []}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.navigate('DetailsStudyGroupScreen', item)}>
                        <ListCellStudyGroup group={item} />
                        <SpacerLine
                            lineHeight={0.8}
                            lineColor={Colors.middleGrey}
                            lineWidth={360} />
                    </TouchableOpacity>}
            />
        </ScrollView>
    );
};

export default StudyGroupsScreen;