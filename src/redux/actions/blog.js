import { server } from '../store';
import axios from 'axios';
export const getAllBlogs =
  (category = '', keyword = '', page = 1) =>
  async dispatch => {
    try {
      dispatch({ type: 'allblogsRequest' });
      const { data } = await axios.get(
        `${server}/allblogs?keyword=${keyword}&category=${category}&page=${page}`
      );
      dispatch({ type: 'allblogsSuccess', payload: data.blogs });
    } catch (error) {
      dispatch({
        type: 'allblogsFail',
        payload: error.response.data.message,
      });
    }
  };
export const getBlogs = () => async dispatch => {
  try {
    dispatch({ type: 'getblogsRequest' });
    const { data } = await axios.get(`${server}/blogs`);
    dispatch({ type: 'getblogsSuccess', payload: data.adminblogs });
  } catch (error) {
    dispatch({
      type: 'getblogsFail',
      payload: error.response.data.message,
    });
  }
};
export const getNoOfBlogs =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'noOfbBlogsRequest' });
      const { data } = await axios.get(
        `${server}/nfblogs?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: 'noOfbBlogsSuccess', payload: data.nHits });
    } catch (error) {
      dispatch({
        type: 'noOfbBlogsFail',
        payload: error.response.data.message,
      });
    }
  };
export const getPopularBlogs = () => async dispatch => {
  try {
    dispatch({ type: 'popularBlogsRequest' });
    const { data } = await axios.get(`${server}/popularblogs`);
    dispatch({ type: 'popularBlogsSuccess', payload: data.popularBlogs });
  } catch (error) {
    dispatch({
      type: 'popularBlogsFail',
      payload: error.response.data.message,
    });
  }
};
export const getRecentBlogs = () => async dispatch => {
  try {
    dispatch({ type: 'recentBlogsRequest' });
    const { data } = await axios.get(`${server}/recentblogs`);
    dispatch({ type: 'recentBlogsSuccess', payload: data.recentBlogs });
  } catch (error) {
    dispatch({
      type: 'recentBlogsFail',
      payload: error.response.data.message,
    });
  }
};

export const createBlog = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'createBlogRequest' });
    const { data } = await axios.post(`${server}/createblog`, formData, config);
    dispatch({ type: 'createBlogSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createBlogFail',
      payload: error.response.data.message,
    });
  }
};
// get single blog
export const getSingleBlog = id => async dispatch => {
  try {
    dispatch({ type: 'getSingleBlogRequest' });
    const { data } = await axios.get(`${server}/blog/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: 'getSingleBlogSuccess',
      payload: data.blog,
    });
  } catch (error) {
    dispatch({
      type: 'getSingleBlogFail',
      payload: error.response.data.message,
    });
  }
};

// delete blog

export const deleteBlog = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteBlogRequest' });
    const { data } = await axios.delete(`${server}/blog/${id}`, config);
    dispatch({ type: 'deleteBlogSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteBlogFail',
      payload: error.response.data.message,
    });
  }
};
// update blog
export const updateBlog = (id, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'updateBlogRequest' });
    const { data } = await axios.post(
      `${server}/updateblog/${id}`,
      formData,
      config
    );
    dispatch({ type: 'updateBlogSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateBlogFail',
      payload: error.response.data.message,
    });
  }
};
