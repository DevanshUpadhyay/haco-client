"use client";

import { getAllCourses } from "@/redux/actions/course";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );
  //   console.log(courses);
  return (
    <div>
      <button onClick={() => dispatch(getAllCourses())}>Click</button>
    </div>
  );
};

export default Test;
