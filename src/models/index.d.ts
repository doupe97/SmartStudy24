import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TypeCourse {
  WEBINAR = "WEBINAR",
  PRESENCE = "PRESENCE"
}



type StudyGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookedCourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FavoriteCourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TutorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseLocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ZipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class StudyGroup {
  readonly id: string;
  readonly name: string;
  readonly info?: string | null;
  readonly members?: (string | null)[] | null;
  readonly imageFileName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StudyGroup, StudyGroupMetaData>);
  static copyOf(source: StudyGroup, mutator: (draft: MutableModel<StudyGroup, StudyGroupMetaData>) => MutableModel<StudyGroup, StudyGroupMetaData> | void): StudyGroup;
}

export declare class Student {
  readonly id: string;
  readonly username: string;
  readonly semesterNumber?: number | null;
  readonly info?: string | null;
  readonly age?: number | null;
  readonly mainStudyTopic?: string | null;
  readonly firstname: string;
  readonly lastname: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class BookedCourse {
  readonly id: string;
  readonly username: string;
  readonly courseId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BookedCourse, BookedCourseMetaData>);
  static copyOf(source: BookedCourse, mutator: (draft: MutableModel<BookedCourse, BookedCourseMetaData>) => MutableModel<BookedCourse, BookedCourseMetaData> | void): BookedCourse;
}

export declare class FavoriteCourse {
  readonly id: string;
  readonly username: string;
  readonly courseId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FavoriteCourse, FavoriteCourseMetaData>);
  static copyOf(source: FavoriteCourse, mutator: (draft: MutableModel<FavoriteCourse, FavoriteCourseMetaData>) => MutableModel<FavoriteCourse, FavoriteCourseMetaData> | void): FavoriteCourse;
}

export declare class Tutor {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly age: number;
  readonly recommendation: number;
  readonly info: string;
  readonly imageFileName: string;
  readonly topics?: string[] | null;
  readonly degree: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tutor, TutorMetaData>);
  static copyOf(source: Tutor, mutator: (draft: MutableModel<Tutor, TutorMetaData>) => MutableModel<Tutor, TutorMetaData> | void): Tutor;
}

export declare class CourseLocation {
  readonly id: string;
  readonly street?: string | null;
  readonly streetNumber?: string | null;
  readonly Zip?: Zip | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseLocationZipId?: string | null;
  constructor(init: ModelInit<CourseLocation, CourseLocationMetaData>);
  static copyOf(source: CourseLocation, mutator: (draft: MutableModel<CourseLocation, CourseLocationMetaData>) => MutableModel<CourseLocation, CourseLocationMetaData> | void): CourseLocation;
}

export declare class Zip {
  readonly id: string;
  readonly zip: string;
  readonly city: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Zip, ZipMetaData>);
  static copyOf(source: Zip, mutator: (draft: MutableModel<Zip, ZipMetaData>) => MutableModel<Zip, ZipMetaData> | void): Zip;
}

export declare class Course {
  readonly id: string;
  readonly name: string;
  readonly type: TypeCourse | keyof typeof TypeCourse;
  readonly lessons: number;
  readonly lessonsDuration: number;
  readonly price: number;
  readonly details: string;
  readonly recommendation: number;
  readonly imageFileName: string;
  readonly CourseLocation?: CourseLocation | null;
  readonly Tutor?: Tutor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseCourseLocationId?: string | null;
  readonly courseTutorId?: string | null;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}