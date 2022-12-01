import { Segment, Item, Icon, List } from 'semantic-ui-react';
import EventListAttendee from './event-list-attendee';
const EventListItem = () => {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size='tiny'
                            circular
                            src='./assets/user.png'
                        />
                        <Item.Content>
                            <Item.Header content='Event title' />
                            <Item.Description>Histed by Reza</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Vanue
                </span>
            </Segment>
            <Segment secondary>
                <List>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;
