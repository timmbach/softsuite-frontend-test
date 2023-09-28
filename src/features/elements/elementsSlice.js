import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const url = "https://650af6bedfd73d1fab094cf7.mockapi.io/elements";

const initialState = {
  elements: [],
  elementsCount: 0,
  currentElementId: 1,
  isLoading: true,
};

export const getElements = createAsyncThunk(
  "elements/getElements",
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

const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: {
    [getElements.pending]: (state) => {
      state.isLoading = true;
    },
    [getElements.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.elements = action.payload.data.content;
      state.elementsCount = action.payload.data.total;
    },
    [getElements.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default elementsSlice.reducer;
