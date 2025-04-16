//import { createStore, } from "redux"; 
import { createSlice, configureStore } from '@reduxjs/toolkit';

 const initialCounterState = {
  counter: 0, showCounter: true, 
  }
 const counterReducer= createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      incrementbyfive(state, action) {
        state.counter += action.payload;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },

  });
  const initalAuthState={
    isAuthenticated: false,
  }

const authSlice=createSlice({

  name: 'auth',
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
})

const store = configureStore({
  reducer:{ counter:counterReducer.reducer,
    auth:authSlice.reducer, // add the auth reducer here

  }
  
}); 
 export const counterAction=counterReducer.actions
 export const authAction=authSlice.actions

export default store;

  //**************************this is in redux *************** */
  // const reducer = (state = initialState, action) => {
  //   if (action.type === "increment") {
  //     return {
  //       ...state,
  //       counter: state.counter + 1,
  //     };
  //   }
  
  //   if (action.type === "decrement") {
  //     return {
  //       ...state,
  //       counter: state.counter - 1,
  //     };
  //   }
  
  //   if (action.type === "incrementbyfive") {
  //     return {
  //       ...state,
  //       counter: state.counter + action.amount,
  //     };
  //   }
  
  //   if (action.type === "toggle") {
  //     return {
  //       ...state,
  //       showCounter: !state.showCounter,
  //     };
  //   }
  
  //   return state;
  // };
  

