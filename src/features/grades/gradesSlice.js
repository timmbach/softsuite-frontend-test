import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/game";

const initialState = {
  grades: [],
  //   gradesCount: 0,
  // isLoading: true,
};

export const getGrades = createAsyncThunk(
  "grades/getGrades",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {},
  extraReducers: {
    // [getLookupValues.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [getGrades.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.grades = action.payload;
    },
    [getGrades.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gradesSlice.reducer;
