import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import eventSlice from '../features/events/state/event-slice';
import modalSlice from './common/modals/modal-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        events: eventSlice,
        modals: modalSlice,
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
