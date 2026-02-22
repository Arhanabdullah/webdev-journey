import {configureStore} from '@reduxjs/toolkit';
import searchreducer from './features/SearchSlice';
import collectionreducer from './features/CollectionSlice';

export const store = configureStore({
    reducer:{
        search: searchreducer,
        collection: collectionreducer,
    } 
})