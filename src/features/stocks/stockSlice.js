import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import stockDataService from './stocksAPI';

const initialState = {
  stockCode: '',
  stockData: null,
  stockSummaryData: null,
  chartData: null,
  loading: false,
  error: null,
  errorMessage: '',
  success: false,
  chartDataLoading: false,
};


export const getStockData = createAsyncThunk(
  'stocks/getStockData',
  async (code, thunkAPI) => {
    // get state from state
    try {
     const response = await stockDataService.GetAPIData(code);
    // The value we return becomes the `fulfilled` action payload
    return response; 
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
);

export const getStockDataSummary = createAsyncThunk(
  'stocks/getStockDataSummary',
  async (code, thunkAPI) => {
    // get state from state
    try {
     const response = await stockDataService.GetAPIDataSummary(code);
    // The value we return becomes the `fulfilled` action payload
    return response; 
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
);

export const getStockChartData = createAsyncThunk(
  'stocks/getStockChartData',
  async (data, thunkAPI) => {
    const {code, range, interval} = data;
    // get state from state
    try {
     const response = await stockDataService.getChartData(code, range, interval);
    // The value we return becomes the `fulfilled` action payload
    return response; 
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
);

export const stockSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {
   setStock: (state, action) => {
      state.stockCode = action.payload;
   },
   reset: (state) => {
      // state.stockCode = '';
      state.error = null;
      state.errorMessage = '';
      state.success = false;
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStockData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStockData.fulfilled, (state, action) => {
        state.stockData = action.payload;
        state.loading = false;
        state.success = true;
      }).addCase(getStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      }).addCase(getStockDataSummary.pending, (state) => {
        state.loading = true;
      }).addCase(getStockDataSummary.fulfilled, (state, action) => {
        state.stockSummaryData = action.payload;
        state.loading = false;
        state.success = true;
      }).addCase(getStockDataSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      }).addCase(getStockChartData.pending, (state) => {
        state.chartDataLoading = true;
      }).addCase(getStockChartData.fulfilled, (state, action) => {
        state.chartDataLoading = false;
        state.success = true;
        state.chartData = action.payload;
      }).addCase(getStockChartData.rejected, (state, action) => {
        state.chartDataLoading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
  },
});

export const { setStock, reset } = stockSlice.actions;


export default stockSlice.reducer;
