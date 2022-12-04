import { Grid } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/hooks';
import EventFilters from './event-filters';
import EventList from './event-list';
import EventListItemPlaceholder from './event-list-item-placeholder';

const EventDashBoard: React.FC = () => {
    const events = useAppSelector((state) => state.events.data);
    //handle loading
    // const loading = useAppSelector()

    return (
        <Grid>
            <Grid.Column width={10}>
                {/* {loading && (
                    <>
                        <EventListItemPlaceholder />
                        <EventListItemPlaceholder />
                    </>
                )} */}
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters />
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
