import { Grid } from 'semantic-ui-react';
import EventList from './event-list';
const EventDashBoard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column width={6}>
                <div>rightttt</div>
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
