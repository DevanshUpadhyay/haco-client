import { server } from "../store";
import axios from "axios";
export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch({ type: "allCoursesRequest" });
    const { data } = await axios.get(`${server}/courses`);
    dispatch({ type: "allCoursesSuccess", payload: data.courses });
  } catch (error) {
    dispatch({
      type: "allCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const getSingleCourse = (id) => async () => {
  try {
    dispatch({ type: "getSingleCourseRequest" });
    const { data } = await axios.get(`${server}/course/${id}`);
    dispatch({
      type: "getSingleCourseSuccess",
      payload: data.course,
    });
  } catch (error) {
    dispatch({
      type: "getSingleCourseFail",
      payload: error.response.data.message,
    });
  }
  // const { data } = await axios.get(
  //   `http://localhost:4000/api/v1/course/646f80545af12dac8b397975`
  // );
  // return data.course;
};
//
export const getSectionLecture = (id, sid) => async (dispatch) => {
  try {
    dispatch({ type: "getSectionLectureRequest" });
    const { data } = await axios.get(`${server}/lecture/${id}/${sid}`, {
      withCredentials: true,
    });
    dispatch({
      type: "getSectionLectureSuccess",
      payload: data.lectures,
    });
  } catch (error) {
    dispatch({
      type: "getSectionLectureFail",
      payload: error.response.data.message,
    });
  }
};
export const getDemoLecture = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getDemoLectureRequest" });
    const { data } = await axios.get(`${server}/coursedemo/${id}`);

    dispatch({ type: "getDemoLectureSuccess", payload: data.singleCourse });
  } catch (error) {
    dispatch({
      type: "getDemoLectureFail",
      payload: error.response.data.message,
    });
  }
};
