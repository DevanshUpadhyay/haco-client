import { createReducer } from "@reduxjs/toolkit";
export const courseReducer = createReducer(
  { courses: [], learning: [], content: [], sectionLectures: [] },
  {
    allCoursesRequest: (state) => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // getCoursesRequest: (state) => {
    //   state.loading = true;
    // },
    // getCoursesSuccess: (state, action) => {
    //   state.loading = false;
    //   state.lectures = action.payload;
    // },
    // getCoursesFail: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    getSingleCourseRequest: (state) => {
      state.loading = true;
    },
    getSingleCourseSuccess: (state, action) => {
      state.loading = false;
      state.course = action.payload;
    },
    getSingleCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payloaSingleCourse;
    },
    getSectionLectureRequest: (state) => {
      state.loading = true;
    },
    getSectionLectureSuccess: (state, action) => {
      state.loading = false;
      state.sectionLectures = action.payload;
    },
    getSectionLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getDemoLectureRequest: (state) => {
      state.loading = true;
    },
    getDemoLectureSuccess: (state, action) => {
      state.loading = false;
      state.singleCourse = action.payload;
    },
    getDemoLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //
    getCourseLearningRequest: (state) => {
      state.loading = true;
    },
    getCourseLearningSuccess: (state, action) => {
      state.loading = false;
      state.learning = action.payload;
    },
    getCourseLearningFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //
    getCourseContentRequest: (state) => {
      state.loading = true;
    },
    getCourseContentSuccess: (state, action) => {
      state.loading = false;
      state.content = action.payload;
    },
    getCourseContentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlaylistRequest: (state) => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // youtube api
    getYoutubeLectureRequest: (state) => {
      state.loading = true;
    },
    getYoutubeLectureSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    getYoutubeLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
