import { createReducer } from '@reduxjs/toolkit';
export const blogReducer = createReducer(
  { blogs: [], popularBlogs: [], recentBlogs: [], adminblogs: [] },
  {
    allblogsRequest: state => {
      state.loading = true;
    },
    allblogsSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    allblogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getblogsRequest: state => {
      state.loading = true;
    },
    getblogsSuccess: (state, action) => {
      state.loading = false;
      state.adminblogs = action.payload;
    },
    getblogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    popularBlogsRequest: state => {
      state.loading = true;
    },
    popularBlogsSuccess: (state, action) => {
      state.loading = false;
      state.popularBlogs = action.payload;
    },
    popularBlogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    recentBlogsRequest: state => {
      state.loading = true;
    },
    recentBlogsSuccess: (state, action) => {
      state.loading = false;
      state.recentBlogs = action.payload;
    },
    recentBlogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getSingleBlogRequest: state => {
      state.loading = true;
    },
    getSingleBlogSuccess: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    getSingleBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    noOfbBlogsRequest: state => {
      state.loading = true;
    },
    noOfbBlogsSuccess: (state, action) => {
      state.loading = false;
      state.nHits = action.payload;
    },
    noOfbBlogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createBlogRequest: state => {
      state.loading = true;
    },
    createBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateBlogRequest: state => {
      state.loading = true;
    },
    updateBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteBlogRequest: state => {
      state.loading = true;
    },
    deleteBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
