import { configureStore, createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState = {
  Type: "流浪動物",
  animaltype: "cat",
  ligation: "已結紮",
  hurts: "無明顯外傷",
  additional: "無",
  Publish: "是",
  Page: 1,
  uploadedImage: "No_image",
  lat: 25.0171,
  lon: 121.5377,
};

// 创建slice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.Type = action.payload;
    },
    setAnimalType: (state, action) => {
      state.animaltype = action.payload;
    },
    setLigation: (state, action) => {
      state.ligation = action.payload;
    },
    setHurts: (state, action) => {
      state.hurts = action.payload;
    },
    setAdditional: (state, action) => {
      state.additional = action.payload;
    },
    setPublish: (state, action) => {
      state.Publish = action.payload;
    },
    setPage: (state, action) => {
      state.Page = action.payload;
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
  },
});

// 创建Redux Store
const store = configureStore({
  reducer: appSlice.reducer,
});

// 导出动作创建函数
export const {
  setType,
  setAnimalType,
  setLigation,
  setHurts,
  setAdditional,
  setPublish,
  setPage,
  setUploadedImage,
  setLat,
  setLon,
} = appSlice.actions;

export default store;
