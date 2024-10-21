import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from '@/store/themeConfigSlice';
import searchSlice from '@/store/searchResult';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    search: searchSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
