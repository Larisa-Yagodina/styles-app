import { createSlice } from '@reduxjs/toolkit'
import {MODAL_TYPES} from "../ui/modalWindow/ModalWindow";


const initialState = {
    isOpenModal: false,
    images: [],
    imageIndex: null,
    isAuth: false,
    type: null,
}

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {

        openModal: (state, action) => {
            state.isOpenModal = true;
            state.type = action.payload.type;
            state.images = action.payload.type === MODAL_TYPES.IMAGES ? action.payload.images : [];
            state.imageIndex = action.payload.type === MODAL_TYPES.IMAGES ? action.payload.imageIndex : null;

        },
        setAuth: (state) => {
            state.isAuth = true;
            state.isOpenModal = false;
        },
        signOut: (state) => {
            state.isAuth = false;
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
