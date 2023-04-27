/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudyGroup = /* GraphQL */ `
  query GetStudyGroup($id: ID!) {
    getStudyGroup(id: $id) {
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
export const listStudyGroups = /* GraphQL */ `
  query ListStudyGroups(
    $filter: ModelStudyGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudyGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStudyGroups = /* GraphQL */ `
  query SyncStudyGroups(
    $filter: ModelStudyGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudyGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBookedCourse = /* GraphQL */ `
  query GetBookedCourse($id: ID!) {
    getBookedCourse(id: $id) {
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
export const listBookedCourses = /* GraphQL */ `
  query ListBookedCourses(
    $filter: ModelBookedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        courseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookedCourses = /* GraphQL */ `
  query SyncBookedCourses(
    $filter: ModelBookedCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        courseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFavoriteCourse = /* GraphQL */ `
  query GetFavoriteCourse($id: ID!) {
    getFavoriteCourse(id: $id) {
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
export const listFavoriteCourses = /* GraphQL */ `
  query ListFavoriteCourses(
    $filter: ModelFavoriteCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        courseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFavoriteCourses = /* GraphQL */ `
  query SyncFavoriteCourses(
    $filter: ModelFavoriteCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavoriteCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        courseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTutor = /* GraphQL */ `
  query GetTutor($id: ID!) {
    getTutor(id: $id) {
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
export const listTutors = /* GraphQL */ `
  query ListTutors(
    $filter: ModelTutorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTutors = /* GraphQL */ `
  query SyncTutors(
    $filter: ModelTutorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTutors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourseLocation = /* GraphQL */ `
  query GetCourseLocation($id: ID!) {
    getCourseLocation(id: $id) {
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
export const listCourseLocations = /* GraphQL */ `
  query ListCourseLocations(
    $filter: ModelCourseLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourseLocations = /* GraphQL */ `
  query SyncCourseLocations(
    $filter: ModelCourseLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        lessons
        lessonsDuration
        price
        details
        recommendation
        imageFileName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseCourseLocationId
        courseTutorId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        lessons
        lessonsDuration
        price
        details
        recommendation
        imageFileName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseCourseLocationId
        courseTutorId
      }
      nextToken
      startedAt
    }
  }
`;
export const getZip = /* GraphQL */ `
  query GetZip($id: ID!) {
    getZip(id: $id) {
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
export const listZips = /* GraphQL */ `
  query ListZips(
    $filter: ModelZipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZips = /* GraphQL */ `
  query SyncZips(
    $filter: ModelZipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
