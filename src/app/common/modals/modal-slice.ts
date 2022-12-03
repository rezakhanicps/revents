import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

interface ModalPayload {
    modalType: string;
    modalProps?: any;
}

export interface EventsState {
    data: ModalPayload | null;
}

const initialState: EventsState = {
    data: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalPayload>) => {
            state.data = { ...action.payload };
        },
        closeModal: (state) => {
            state.data = null;
        },
    },
});

export const modalActions = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectModal = (state: RootState) => state.modals.data;

export default modalSlice.reducer;
