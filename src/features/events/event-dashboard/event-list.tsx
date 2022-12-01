import EventListItem from './event-list-item';

interface EventListProps {
    events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    return (
        <>
            {events.map((event) => (
                <EventListItem event={event} key={event.id} />
            ))}
        </>
    );
};

export default EventList;
