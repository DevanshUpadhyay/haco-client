import axios from "axios";
import { server } from "./redux/store";

export const getSingleCourse = async (id) => {
  const { data } = await axios.get(`${server}/course/${id}`);
  return data.course;
};

export const getAllCourses = async () => {
  const { data } = await axios.get(`${server}/courses`);
  return data.courses;
};
export const getAllBlogs = async () => {
  const { data } = await axios.get(`${server}/allblogs`);
  return data.blogs;
};
export const getSingleBlog = async (id) => {
  const { data } = await axios.get(`${server}/blog/${id}`);
  return data.blog;
};
export const isAuthorized = (id) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  var check = false;

  if (user) {
    if (user.plan === "active") {
      check = true;
    } else {
      for (let i = 0; i < user.subscription.length; i++) {
        if (String(user.subscription[i].course_id) === String(id)) {
          check = true;
        }
      }
    }
  }

  return check;
};
export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  var check = false;

  if (user) {
    check = true;
  }

  return check;
};
