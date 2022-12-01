import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './event-detailed-chat';
import EventDetailedHeader from './event-detailed-header';
import EventDetailedInfo from './event-detailed-info';
import EventDetailedSidebar from './event-detailed-sidebar';

const EventDetailedPage: React.FC = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    );
};

export default EventDetailedPage;
