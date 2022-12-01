import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
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
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <div>Description of event</div>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;
