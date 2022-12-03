import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface AuthPayload {
    email: string;
}

interface authState {
    authenticated: boolean;
    currentUser: User | null;
}

const initialState: authState = {
    authenticated: true,
    currentUser: { email: 'reza@test.com', photoURL: '/assets/user.png' },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, action: PayloadAction<AuthPayload>) => {
            state.authenticated = true;
            state.currentUser = {
                email: action.payload.email,
                photoURL: '/assets/user.png',
            };
        },
        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = null;
        },
    },
});

export const authActions = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
