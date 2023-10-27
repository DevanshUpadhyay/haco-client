import { createReducer } from '@reduxjs/toolkit';

export const subscriptionReducer = createReducer(
  {},
  {
    buySubscriptionRequest: state => {
      state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    buySubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //
    paymentRequest: state => {
      state.loading = true;
    },
    paymentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    paymentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // buySingleSubscriptionRequest: state => {
    //   state.loading = true;
    // },
    // buySingleSubscriptionSuccess: (state, action) => {
    //   state.loading = false;
    //   state.subscriptionId = action.payload;
    // },
    // buySingleSubscriptionFail: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    cancelSubscriptionRequest: state => {
      state.loading = true;
    },
    cancelSubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    cancelSubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    paypalPaymentRequest: state => {
      state.loading = true;
    },
    paypalPaymentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    paypalPaymentFail: (state, action) => {
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
