import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sample-data';
import EventForm from '../event-form/event-form';
import EventList from './event-list';

interface EventDashBoardProps {
    formOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectEvent: (e: Event | null) => void;
    selectedEvent: Event | null;
}

const EventDashBoard: React.FC<EventDashBoardProps> = ({
    formOpen,
    setFormOpen,
    selectEvent,
    selectedEvent,
}) => {
    const [events, setEvents] = useState(sampleData as Event[]);

    const handleCreateEvent = (event: Event) => {
        setEvents([...events, event]);
    };

    const handleUpdateEvent = (updatedEvent: Event) => {
        setEvents(
            events.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
        );
        selectEvent(null);
    };

    const handleDeleteEvent = (eventId: string) => {
        setEvents(events.filter((e) => e.id !== eventId));
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    selectEvent={selectEvent}
                    deleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                    <EventForm
                        setFormOpen={setFormOpen}
                        setEvents={setEvents}
                        createEvent={handleCreateEvent}
                        selectedEvent={selectedEvent}
                        updateEvent={handleUpdateEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
