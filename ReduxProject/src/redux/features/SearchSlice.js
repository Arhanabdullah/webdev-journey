import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
        loading: false,
        activeTab: 'Photos',
        page: 1,
        error: null
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setPage:(state, action) =>{
            state.page = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null
        },

        setActiveTabs: (state, action) => {
            state.activeTab = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearResults: (state) => {
            state.results = [];
        }
    }
})


export const { setQuery, setResults, setPage, setLoading, setActiveTabs, setError, clearResults } = searchSlice.actions;
export default searchSlice.reducer;