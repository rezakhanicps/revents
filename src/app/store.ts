import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth-slice';
import counterReducer from '../features/counter/counterSlice';
import eventSlice from '../features/events/state/event-slice';
import { eventApi } from './api';
import modalSlice from './common/modals/modal-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        events: eventSlice,
        modals: modalSlice,
        auth: authSlice,
        [eventApi.reducerPath]: eventApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            eventApi.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
