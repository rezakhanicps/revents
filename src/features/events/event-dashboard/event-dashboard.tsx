import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sample-data';
import EventForm from '../event-form/event-form';
import EventList from './event-list';
const EventDashBoard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData as Event[]} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventForm />
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
