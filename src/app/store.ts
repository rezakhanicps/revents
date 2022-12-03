import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth-slice';
import counterReducer from '../features/counter/counterSlice';
import eventSlice from '../features/events/state/event-slice';
import modalSlice from './common/modals/modal-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        events: eventSlice,
        modals: modalSlice,
        auth: authSlice,
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
