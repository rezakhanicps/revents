import { Grid } from 'semantic-ui-react';
import { useListenToEventsQuery } from '../../../app/api';
import EventFilters from './event-filters';
import EventList from './event-list';
import EventListItemPlaceholder from './event-list-item-placeholder';

const EventDashBoard: React.FC = () => {
    // const events = useAppSelector((state) => state.eventApi.provided);
    const { isLoading, isFetching, data } = useListenToEventsQuery('');

    // console.log(isFetching, data);

    return (
        <Grid>
            <Grid.Column width={10}>
                {isLoading && (
                    <>
                        <EventListItemPlaceholder />
                        <EventListItemPlaceholder />
                    </>
                )}
                <EventList events={data || []} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters />
            </Grid.Column>
        </Grid>
    );
};

export default EventDashBoard;
