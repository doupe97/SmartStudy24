import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Styles from '../../res/ui/Styles';
import Colors from '../../res/ui/Colors';
import { useForm } from 'react-hook-form';
import Spacer from '../../components/Spacer';
import { API } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';
import { updateStudent } from '../../graphql/mutations';
import getCurrentUser from '../../functions/getCurrentUser';
import { useNavigation } from '@react-navigation/native';

const EditUserProfileScreen = ({ navigation }) => {

    const nav = useNavigation();
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onUpdatePressed = async data => {
        if (loading) { return; }
        setLoading(true);
        const { mainStudyTopic, semesterNumber, info, age } = data;
        try {
            // get student profil id by username
            const user = await getCurrentUser();
            let filter = { username: { eq: user.username } };
            let resultStudent = await API.graphql({ query: listStudents, variables: { filter: filter } });
            let userId = resultStudent.data?.listStudents.items[0].id;
            let versionToUpdate = resultStudent.data?.listStudents.items[0]["_version"];

            // update student profil
            const updateItem = { 
                id: userId,
                username: user.username,
                semesterNumber: semesterNumber,
                info: info,
                age: age,
                mainStudyTopic: mainStudyTopic,
                "_version": versionToUpdate
            };
            await API.graphql({ query: updateStudent, variables: { input: updateItem } });

            // navigate to current user screen
            nav.navigate('CurrentUserScreen');
        } catch (e) {
            Alert.alert('Fehler beim Speichern', e.message);
        }
        setLoading(false);
    };

    const onTermsOfUsePressed = () => { };

    const onPrivacyPressed = () => { };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.signUpHeader}>
                <Icon
                    name="arrow-back-ios"
                    size={32}
                    color={Colors.dark}
                    onPress={navigation.goBack} />
                <Text style={Styles.signUpTitle}>Profil aktualisieren</Text>
            </View>
            <View style={Styles.signUpRootView}>
                <CustomInput
                    name="mainStudyTopic"
                    control={control}
                    placeholder="Studiengang"
                    rules={{
                        required: 'Studiengang eingeben'
                    }}
                />
                <CustomInput
                    name="semesterNumber"
                    control={control}
                    placeholder="Semester"
                    rules={{
                        required: 'Aktuelles Semester eingeben'
                    }}
                />
                <CustomInput
                    name="info"
                    control={control}
                    placeholder="Beschreibung"
                    rules={{
                        required: 'Beschreibung eingeben'
                    }}
                />
                <CustomInput
                    name="age"
                    control={control}
                    placeholder="Alter"
                    rules={{
                        required: 'Alter eingeben'
                    }} />
                <Spacer height={26} />
                <CustomButton
                    text={loading ? 'Speichern ...' : 'Speichern'}
                    onPress={handleSubmit(onUpdatePressed)}
                />
                <Text style={{ color: Colors.dark, marginVertical: 10, fontSize: 16 }}>
                    {'Mit der Speicherung der persönlichen Daten bestätigen Sie, dass Sie unseren '}
                    <Text style={Styles.link} onPress={onTermsOfUsePressed}>
                        {'Nutzungsbedingungen '}
                    </Text>
                    und
                    <Text style={Styles.link} onPress={onPrivacyPressed}>
                        {' Datenschutzbestimmungen '}
                    </Text>
                    zustimmen.
                </Text>
            </View>
        </ScrollView>
    );
};

export default EditUserProfileScreen;