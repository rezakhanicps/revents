import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { loadEvents } from '../firestore/firestoreService';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['events'],
    endpoints: (builder) => ({
        listenToEvents: builder.query<Event[], string>({
            //@ts-ignore
            async queryFn(arg) {
                try {
                    const data = await loadEvents();
                    console.log(data)
                    return { data };
                } catch (error) {
                    return { error };
                }
            },
            
        }),
    }),
});

export const { useListenToEventsQuery } = eventApi;
