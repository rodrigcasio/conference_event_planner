import { createSlice } from "@reduxjs/toolkit";
import '../public/imgsFinalPractice';
// 1. adding objects to provide data structure

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "./imgsFinalPractice/projectors.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "./imgsFinalPractice/speakers.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "./imgsFinalPractice/microphone.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "./imgsFinalPractice/whiteboard.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "./imgsFinalPractice/signpost.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
