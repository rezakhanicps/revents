import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sample-data';
import EventForm from '../event-form/event-form';
import EventList from './event-list';

interface EventDashBoardProps {
    formOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventDashBoard: React.FC<EventDashBoardProps> = ({
    formOpen,
    setFormOpen,
}) => {
    const [events, setEvents] = useState(sampleData as Event[]);

    const handleCreateEvent = (event: Event) => {
        setEvents([...events, event]);
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                    <EventForm
                        setFormOpen={setFormOpen}
                        setEvents={setEvents}
                        createEvent={handleCreateEvent}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
