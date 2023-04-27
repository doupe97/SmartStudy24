import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const { width } = Dimensions.get('screen');

const Styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60
    },
    headerTitle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 23
    },
    joinLeaveButton: {
        flexDirection: 'row',
        justifyContent: 'center',        
        marginLeft: 20,
        marginTop: -20,
        width: 160,
        height: 34,
        backgroundColor: Colors.primary,
        borderRadius: 14
    },
    inputContainer: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12
    },
    categoryContainerCard: {
        marginBottom: 8,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainerCard: {
        height: 60,
        width: 60,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 24
    },
    headLineScreen: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10
    },
    rmCardImage: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10
    },
    textShadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.95,
        shadowRadius: 10,
        elevation: 10
    },
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40
    },
    btn: {
        height: 50,
        width: 160,
        backgroundColor: Colors.primary,
        marginTop: 38,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookNowBtn: {
        height: 50,
        width: 150,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutbtn: {
        height: 50,
        width: 160,
        backgroundColor: '#E91043',
        marginTop: 38,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerDetails: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 38
    },
    iconContainerDetail: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -60,
        backgroundColor: Colors.lightGrey,
        borderRadius: 30,
        borderColor: Colors.borderColor,
        borderWidth: 2,
        right: 0,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerDetails: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 26,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColorSafeArea,
        flex: 0.5
    },
    imageDetailsCourse: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 100,
        bottom: 40
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalLoginView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        height: 400,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModal: {
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    signInRootView: {
        alignItems: 'center',
        padding: 20,
        marginTop: 20
    },
    signUpRootView: {
        alignItems: 'center',
        padding: 20
    },
    signUpHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        marginTop: 70,
        marginBottom: 10
    },
    signUpTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.dark,
        marginLeft: 14
    },
    confirmHeader: {
        alignItems: 'center',
        marginBottom: 20
    },
    controllerContainer: {
        backgroundColor: Colors.white,
        width: '100%',
        borderColor: Colors.middleGrey,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 14,
        marginVertical: 5
    },
    confirmTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.dark,
        marginTop: 70
    },
    link: {
        color: Colors.primary
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: Colors.primary,
    },
    buttonClose: {
        backgroundColor: Colors.primary,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        fontSize: 22,
        textAlign: "center"
    },
    modalActionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    listCellTutor: {
        height: 80,
        marginTop: 2,
        marginBottom: 6,
        height: 90,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    listCellCourse: {
        height: 140,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    listCellMember: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    listCellDetailsAccessor: {
        position: 'absolute',
        left: 335,
        top: 12
    },
    listCellDetailsAccessorCourse: {
        position: 'absolute',
        left: 350,
        top: 30
    },
    listCellDetailsAccessorMember: {
        position: 'absolute',
        left: 350,
        top: 8
    },
    listCellDetailsAccessorStudyGroupInfo: {
        position: 'absolute',
        left: 350,
        top: 45
    },
    listCellDetailsAccessorStudyGroup: {
        position: 'absolute',
        left: 320,
        top: 10
    },
    tutorImageView: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 100
    },
    tutorMostTopic: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 20,
        maxWidth: 300,
        fontWeight: 'bold',
        color: Colors.dark
    },
    tutorInfoDesc: {
        fontSize: 22,
        textAlign: 'justify',
        lineHeight: 26
    },
    tutorTitle: {
        marginLeft: 14,
        marginTop: 2,
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.dark
    },
    searchBox: {
        marginTop: 14,
        marginLeft: 10,
        fontSize: 22
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 3,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    },
    aboutInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 34,
        marginBottom: 8
    }
});

export default Styles;