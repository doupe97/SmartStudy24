// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeCourse = {
  "WEBINAR": "WEBINAR",
  "PRESENCE": "PRESENCE"
};

const { StudyGroup, Student, BookedCourse, FavoriteCourse, Tutor, CourseLocation, Zip, Course } = initSchema(schema);

export {
  StudyGroup,
  Student,
  BookedCourse,
  FavoriteCourse,
  Tutor,
  CourseLocation,
  Zip,
  Course,
  TypeCourse
};