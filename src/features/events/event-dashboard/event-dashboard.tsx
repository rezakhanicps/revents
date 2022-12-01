import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sample-data';
import EventList from './event-list';

interface EventDashBoardProps {
    formOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectEvent: (e: Event | null) => void;
    selectedEvent: Event | null;
}

const EventDashBoard: React.FC<EventDashBoardProps> = () => {
    const [events, setEvents] = useState(sampleData as Event[]);

    // const handleCreateEvent = (event: Event) => {
    //     setEvents([...events, event]);
    // };

    // const handleUpdateEvent = (updatedEvent: Event) => {
    //     setEvents(
    //         events.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
    //     );
    // };

    const handleDeleteEvent = (eventId: string) => {
        setEvents(events.filter((e) => e.id !== eventId));
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    deleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>event Filters</h2>
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
