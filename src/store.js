// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice.js';
// 3. adding the into the store the avSlice

export default configureStore({
  reducer: {
    venue: venueReducer,    
    av: avReducer,    // same name as the key-value pair 'name: "av" in avSlice.js
  },
});
