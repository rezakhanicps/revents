import { Grid } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import EventList from './event-list';


const EventDashBoard: React.FC = () => {
    const events = useAppSelector(state=>state.events.data)
    // const {} = useAppDispatch()
    // const handleCreateEvent = (event: Event) => {
    //     setEvents([...events, event]);
    // };

    // const handleUpdateEvent = (updatedEvent: Event) => {
    //     setEvents(
    //         events.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
    //     );
    // };

    const handleDeleteEvent = (eventId: string) => {
        // setEvents(events.filter((e) => e.id !== eventId));
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
