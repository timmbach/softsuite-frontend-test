import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/departments";

const initialState = {
  departments: [],
  departmentsCount: 0,
  // isLoading: true,
};

export const getDepartments = createAsyncThunk(
  "departments/getDepartments",
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

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: {
    // [getLookupValues.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [getDepartments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.departments = action.payload;
    },
    [getDepartments.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default departmentsSlice.reducer;
