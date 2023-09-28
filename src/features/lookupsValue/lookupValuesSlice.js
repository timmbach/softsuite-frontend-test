import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/lookups";

const initialState = {
  lookupValues: [],
  lookupValuesCount: 0,
  // isLoading: true,
};

export const getLookupValues = createAsyncThunk(
  "lookupValues/getLookupValues",
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

const lookupValuesSlice = createSlice({
  name: "lookupValues",
  initialState,
  reducers: {},
  extraReducers: {
    // [getLookupValues.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [getLookupValues.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lookupValues = action.payload;
    },
    [getLookupValues.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default lookupValuesSlice.reducer;
