import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/lookups";

const initialState = {
  lookups: [],
  lookupsCount: 0,
  isLoading: true,
};

export const getLookups = createAsyncThunk(
  "lookups/getLookups",
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

const lookupsSlice = createSlice({
  name: "lookups",
  initialState,
  reducers: {},
  extraReducers: {
    [getLookups.pending]: (state) => {
      state.isLoading = true;
    },
    [getLookups.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lookups = action.payload;
    },
    [getLookups.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default lookupsSlice.reducer;
