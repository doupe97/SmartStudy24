/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudyGroup = /* GraphQL */ `
  subscription OnCreateStudyGroup {
    onCreateStudyGroup {
      id
      name
      info
      members
      imageFileName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStudyGroup = /* GraphQL */ `
  subscription OnUpdateStudyGroup {
    onUpdateStudyGroup {
      id
      name
      info
      members
      imageFileName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStudyGroup = /* GraphQL */ `
  subscription OnDeleteStudyGroup {
    onDeleteStudyGroup {
      id
      name
      info
      members
      imageFileName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      username
      semesterNumber
      info
      age
      mainStudyTopic
      firstname
      lastname
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      username
      semesterNumber
      info
      age
      mainStudyTopic
      firstname
      lastname
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      username
      semesterNumber
      info
      age
      mainStudyTopic
      firstname
      lastname
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBookedCourse = /* GraphQL */ `
  subscription OnCreateBookedCourse {
    onCreateBookedCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBookedCourse = /* GraphQL */ `
  subscription OnUpdateBookedCourse {
    onUpdateBookedCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBookedCourse = /* GraphQL */ `
  subscription OnDeleteBookedCourse {
    onDeleteBookedCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFavoriteCourse = /* GraphQL */ `
  subscription OnCreateFavoriteCourse {
    onCreateFavoriteCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFavoriteCourse = /* GraphQL */ `
  subscription OnUpdateFavoriteCourse {
    onUpdateFavoriteCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFavoriteCourse = /* GraphQL */ `
  subscription OnDeleteFavoriteCourse {
    onDeleteFavoriteCourse {
      id
      username
      courseId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTutor = /* GraphQL */ `
  subscription OnCreateTutor {
    onCreateTutor {
      id
      firstname
      lastname
      age
      recommendation
      info
      imageFileName
      topics
      degree
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTutor = /* GraphQL */ `
  subscription OnUpdateTutor {
    onUpdateTutor {
      id
      firstname
      lastname
      age
      recommendation
      info
      imageFileName
      topics
      degree
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTutor = /* GraphQL */ `
  subscription OnDeleteTutor {
    onDeleteTutor {
      id
      firstname
      lastname
      age
      recommendation
      info
      imageFileName
      topics
      degree
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCourseLocation = /* GraphQL */ `
  subscription OnCreateCourseLocation {
    onCreateCourseLocation {
      id
      street
      streetNumber
      Zip {
        id
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseLocationZipId
    }
  }
`;
export const onUpdateCourseLocation = /* GraphQL */ `
  subscription OnUpdateCourseLocation {
    onUpdateCourseLocation {
      id
      street
      streetNumber
      Zip {
        id
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseLocationZipId
    }
  }
`;
export const onDeleteCourseLocation = /* GraphQL */ `
  subscription OnDeleteCourseLocation {
    onDeleteCourseLocation {
      id
      street
      streetNumber
      Zip {
        id
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseLocationZipId
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      name
      type
      lessons
      lessonsDuration
      price
      details
      recommendation
      imageFileName
      CourseLocation {
        id
        street
        streetNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseLocationZipId
      }
      Tutor {
        id
        firstname
        lastname
        age
        recommendation
        info
        imageFileName
        topics
        degree
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseCourseLocationId
      courseTutorId
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      name
      type
      lessons
      lessonsDuration
      price
      details
      recommendation
      imageFileName
      CourseLocation {
        id
        street
        streetNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseLocationZipId
      }
      Tutor {
        id
        firstname
        lastname
        age
        recommendation
        info
        imageFileName
        topics
        degree
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseCourseLocationId
      courseTutorId
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      name
      type
      lessons
      lessonsDuration
      price
      details
      recommendation
      imageFileName
      CourseLocation {
        id
        street
        streetNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseLocationZipId
      }
      Tutor {
        id
        firstname
        lastname
        age
        recommendation
        info
        imageFileName
        topics
        degree
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseCourseLocationId
      courseTutorId
    }
  }
`;
export const onCreateZip = /* GraphQL */ `
  subscription OnCreateZip {
    onCreateZip {
      id
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateZip = /* GraphQL */ `
  subscription OnUpdateZip {
    onUpdateZip {
      id
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteZip = /* GraphQL */ `
  subscription OnDeleteZip {
    onDeleteZip {
      id
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
