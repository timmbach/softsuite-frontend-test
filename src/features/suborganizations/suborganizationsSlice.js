import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/suborganizations";

const initialState = {
  suborganizations: [],
  suborganizationsCount: 0,
  // isLoading: true,
};

export const getSuborganizations = createAsyncThunk(
  "suborganizations/getSuborganizations",
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

const suborganizationsSlice = createSlice({
  name: "suborganizations",
  initialState,
  reducers: {},
  extraReducers: {
    // [getLookupValues.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [getSuborganizations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.suborganizations = action.payload;
    },
    [getSuborganizations.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default suborganizationsSlice.reducer;
