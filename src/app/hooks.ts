import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authActions } from '../features/auth/auth-slice';
import { eventActions } from '../features/events/state/event-slice';
import { modalActions } from './common/modals/modal-slice';
import type { RootState, AppDispatch } from './store';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useEventAction = () => {
    return bindActionCreators(eventActions, useAppDispatch());
};

export const useModalAction = () => {
    return bindActionCreators(modalActions, useAppDispatch());
};

export const useAuthAction = () => {
    return bindActionCreators(authActions, useAppDispatch());
};