import {configureStore} from '@reduxjs/toolkit';
import searchreducer from './features/SearchSlice';

export const store = configureStore({
    reducer:{
        search: searchreducer,
    } 
})