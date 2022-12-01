import EventListItem from './event-list-item';

interface EventListProps {
    events: Event[];
    deleteEvent: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({
    events,
    deleteEvent,
}) => {
    return (
        <>
            {events.map((event) => (
                <EventListItem
                    event={event}
                    key={event.id}
                    deleteEvent={deleteEvent}
                />
            ))}
        </>
    );
};

export default EventList;
