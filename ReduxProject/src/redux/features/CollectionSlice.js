import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";


const initialState = {
    items: JSON.parse(localStorage.getItem('Collection')) || []
}

const collectionSlice = createSlice({
    name: 'Collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('Collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('Collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('Collection')
        },
        addToast: () => {
            toast.success('Added To Collection✅', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Removed Form Collection!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
        }
    }
})

export const { addCollection,
    removeCollection,
    addToast,
    removeToast,
    clearCollection
} = collectionSlice.actions;

export default collectionSlice.reducer;  