import { Grid } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/hooks';
import EventList from './event-list';

const EventDashBoard: React.FC = () => {
    const events = useAppSelector((state) => state.events.data);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>event Filters</h2>
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
