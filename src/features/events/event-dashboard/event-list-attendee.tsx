import { List, Image } from 'semantic-ui-react';

interface AttendeeProps {
    attendee: Attendee;
}

const EventListAttendee: React.FC<AttendeeProps> = ({ attendee }) => {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    );
};

export default EventListAttendee;
