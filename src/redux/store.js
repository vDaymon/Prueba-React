import { configureStore } from '@reduxjs/toolkit';

const userReducer = (state = { name: '', email: '',password: '', islogged: false }, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
        console.log('redux print', action.payload);
      return { ...state, ...action.payload, islogged: !false};	
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;