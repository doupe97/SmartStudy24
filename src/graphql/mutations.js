/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudyGroup = /* GraphQL */ `
  mutation CreateStudyGroup(
    $input: CreateStudyGroupInput!
    $condition: ModelStudyGroupConditionInput
  ) {
    createStudyGroup(input: $input, condition: $condition) {
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
export const updateStudyGroup = /* GraphQL */ `
  mutation UpdateStudyGroup(
    $input: UpdateStudyGroupInput!
    $condition: ModelStudyGroupConditionInput
  ) {
    updateStudyGroup(input: $input, condition: $condition) {
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
export const deleteStudyGroup = /* GraphQL */ `
  mutation DeleteStudyGroup(
    $input: DeleteStudyGroupInput!
    $condition: ModelStudyGroupConditionInput
  ) {
    deleteStudyGroup(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createBookedCourse = /* GraphQL */ `
  mutation CreateBookedCourse(
    $input: CreateBookedCourseInput!
    $condition: ModelBookedCourseConditionInput
  ) {
    createBookedCourse(input: $input, condition: $condition) {
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
export const updateBookedCourse = /* GraphQL */ `
  mutation UpdateBookedCourse(
    $input: UpdateBookedCourseInput!
    $condition: ModelBookedCourseConditionInput
  ) {
    updateBookedCourse(input: $input, condition: $condition) {
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
export const deleteBookedCourse = /* GraphQL */ `
  mutation DeleteBookedCourse(
    $input: DeleteBookedCourseInput!
    $condition: ModelBookedCourseConditionInput
  ) {
    deleteBookedCourse(input: $input, condition: $condition) {
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
export const createFavoriteCourse = /* GraphQL */ `
  mutation CreateFavoriteCourse(
    $input: CreateFavoriteCourseInput!
    $condition: ModelFavoriteCourseConditionInput
  ) {
    createFavoriteCourse(input: $input, condition: $condition) {
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
export const updateFavoriteCourse = /* GraphQL */ `
  mutation UpdateFavoriteCourse(
    $input: UpdateFavoriteCourseInput!
    $condition: ModelFavoriteCourseConditionInput
  ) {
    updateFavoriteCourse(input: $input, condition: $condition) {
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
export const deleteFavoriteCourse = /* GraphQL */ `
  mutation DeleteFavoriteCourse(
    $input: DeleteFavoriteCourseInput!
    $condition: ModelFavoriteCourseConditionInput
  ) {
    deleteFavoriteCourse(input: $input, condition: $condition) {
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
export const createTutor = /* GraphQL */ `
  mutation CreateTutor(
    $input: CreateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    createTutor(input: $input, condition: $condition) {
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
export const updateTutor = /* GraphQL */ `
  mutation UpdateTutor(
    $input: UpdateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    updateTutor(input: $input, condition: $condition) {
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
export const deleteTutor = /* GraphQL */ `
  mutation DeleteTutor(
    $input: DeleteTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    deleteTutor(input: $input, condition: $condition) {
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
export const createCourseLocation = /* GraphQL */ `
  mutation CreateCourseLocation(
    $input: CreateCourseLocationInput!
    $condition: ModelCourseLocationConditionInput
  ) {
    createCourseLocation(input: $input, condition: $condition) {
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
export const updateCourseLocation = /* GraphQL */ `
  mutation UpdateCourseLocation(
    $input: UpdateCourseLocationInput!
    $condition: ModelCourseLocationConditionInput
  ) {
    updateCourseLocation(input: $input, condition: $condition) {
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
export const deleteCourseLocation = /* GraphQL */ `
  mutation DeleteCourseLocation(
    $input: DeleteCourseLocationInput!
    $condition: ModelCourseLocationConditionInput
  ) {
    deleteCourseLocation(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createZip = /* GraphQL */ `
  mutation CreateZip(
    $input: CreateZipInput!
    $condition: ModelZipConditionInput
  ) {
    createZip(input: $input, condition: $condition) {
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
export const updateZip = /* GraphQL */ `
  mutation UpdateZip(
    $input: UpdateZipInput!
    $condition: ModelZipConditionInput
  ) {
    updateZip(input: $input, condition: $condition) {
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
export const deleteZip = /* GraphQL */ `
  mutation DeleteZip(
    $input: DeleteZipInput!
    $condition: ModelZipConditionInput
  ) {
    deleteZip(input: $input, condition: $condition) {
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
