import { RouteComponentProps } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/hooks';
import EventDetailedChat from './event-detailed-chat';
import EventDetailedHeader from './event-detailed-header';
import EventDetailedInfo from './event-detailed-info';
import EventDetailedSidebar from './event-detailed-sidebar';

const EventDetailedPage: React.FC<RouteComponentProps> = ({ match }) => {
    const event  = useAppSelector(
        (state) =>
            //@ts-ignore
            state.events.data.find((e) => e.id === match.params.id) as Event
    );

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>
    );
};

export default EventDetailedPage;
