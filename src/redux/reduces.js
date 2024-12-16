import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isOpenModal: false,
    images: [],
    isAuth: false,
}

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        openImagesModal: (state, action) => {
            state.isOpenModal = true;
            state.images = action.images;
        },
        openAuthModal: (state) => {
            state.isOpenModal = true;
            state.images = 'action.images';

        },
        setAuth: (state) => {
            state.isAuth = true;
            state.isOpenModal = false;
        },
        closeModal: (state) => {
            state.images = [];
            state.isOpenModal = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { actions: modalActions } = modalWindowSlice;
export const { reducer: modalReducer } = modalWindowSlice;
