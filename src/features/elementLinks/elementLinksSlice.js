import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import elements from "../../elementsTable/MOCK_DATA.json";
import axios from "axios";

const elementsUrl = "https://650af6bedfd73d1fab094cf7.mockapi.io/elements";

const initialState = {
  elementLinks: [],
  elementLinksCount: 0,
  currentElementLinkId: null,
  isLoading: true,
};

export const getElementLinks = createAsyncThunk(
  "elements/getElementLinks",
  async (currentElementId, thunkAPI) => {
    try {
      const { data } = await axios(
        `${elementsUrl}/${currentElementId}/elementlinks`
      );
      return data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const elementLinksSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: {
    [getElementLinks.pending]: (state) => {
      state.isLoading = true;
    },
    [getElementLinks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.elementLinks = action.payload;
    },
    [getElementLinks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default elementLinksSlice.reducer;
