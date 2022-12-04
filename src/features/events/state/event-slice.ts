import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sampleData } from '../../../app/constant/sample-data';
import { RootState } from '../../../app/store';

export interface EventsState {
    data: Event[];
}

const initialState: EventsState = {
    data: sampleData as Event[],
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        createEvent: (state, action: PayloadAction<Event>) => {
            state.data.push(action.payload);
        },
        updateEvent: (state, action: PayloadAction<Event>) => {
            state.data = [
                ...state.data.filter((event) => event.id !== action.payload.id),
                action.payload,
            ];
        },
        deleteEvent: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(
                (event) => event.id !== action.payload
            );
        },
    },
});

export const eventActions = eventSlice.actions 

// Other code such as selectors can use the imported `RootState` type
export const selectEvent = (state: RootState) => state.events.data;

export default eventSlice.reducer;
