const setImage = (filename) => {
    switch (filename.toLowerCase().trim()) {

        // courses
        case "cloud.jpg":
            return require('./../assets/courseImages/cloud.jpg');
        case "db.jpg":
            return require('./../assets/courseImages/db.jpg');
        case "informatik.jpg":
            return require('./../assets/courseImages/informatik.jpg');
        case "java.jpg":
            return require('./../assets/courseImages/java.jpg');
        case "linux.jpg":
            return require('./../assets/courseImages/linux.jpg');
        case "mathematik.jpg":
            return require('./../assets/courseImages/mathematik.jpg');
        case "netzwerke.jpg":
            return require('./../assets/courseImages/netzwerke.jpg');
        case "programmieren.jpg":
            return require('./../assets/courseImages/programmieren.jpg');
        case "student.jpg":
            return require('./../assets/courseImages/student.jpg');
        case "uni.jpg":
            return require('./../assets/courseImages/uni.jpg');
        case "windows.jpg":
            return require('./../assets/courseImages/windows.jpg');

        // tutors
        case "profil2":
            return require('./../assets/profilePictures/profil2.jpg');
        case "profil2.png":
            return require('./../assets/profilePictures/profil2.png');
        case "profil3":
            return require('./../assets/profilePictures/profil3.jpg');
        case "profil3.png":
            return require('./../assets/profilePictures/profil3.png');
        case "profil4":
            return require('./../assets/profilePictures/profil4.jpg');
        case "profil4.png":
            return require('./../assets/profilePictures/profil4.png');
        case "profil5":
            return require('./../assets/profilePictures/profil5.jpg');
        case "profil5.png":
            return require('./../assets/profilePictures/profil5.png');
        case "profil8":
            return require('./../assets/profilePictures/profil8.jpg');
        case "profil8.png":
            return require('./../assets/profilePictures/profil8.png');
        case "profil10":
            return require('./../assets/profilePictures/profil10.jpg');
        case "profil10.png":
            return require('./../assets/profilePictures/profil10.png');
        case "profil11":
            return require('./../assets/profilePictures/profil11.jpg');
        case "profil11.png":
            return require('./../assets/profilePictures/profil11.png');
        case "profil12":
            return require('./../assets/profilePictures/profil12.jpg');
        case "profil12.png":
            return require('./../assets/profilePictures/profil12.png');
        case "profil13":
            return require('./../assets/profilePictures/profil13.jpg');
        case "profil13.png":
            return require('./../assets/profilePictures/profil13.png');
        case "profil14":
            return require('./../assets/profilePictures/profil14.jpg');
        case "profil14.png":
            return require('./../assets/profilePictures/profil14.png');

        // study groups
        case "group1.jpg":
            return require('./../assets/groupImages/group1.jpg');
        case "group2.jpg":
            return require('./../assets/groupImages/group2.jpg');
        case "group3.jpg":
            return require('./../assets/groupImages/group3.jpg');
        case "group4.jpg":
            return require('./../assets/groupImages/group4.jpg');
        case "group5.jpg":
            return require('./../assets/groupImages/group5.jpg');
        case "group6.jpg":
            return require('./../assets/groupImages/group6.jpg');
        case "group7.jpg":
            return require('./../assets/groupImages/group7.jpg');
        case "group8.jpg":
            return require('./../assets/groupImages/group8.jpg');

        default:
            break;
    }
};

export default setImage;