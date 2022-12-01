import EventListItem from './event-list-item';

interface EventListProps {
    events: Event[];
    selectEvent: (e: Event) => void;
    deleteEvent: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({
    events,
    selectEvent,
    deleteEvent,
}) => {
    return (
        <>
            {events.map((event) => (
                <EventListItem
                    event={event}
                    key={event.id}
                    selectEvent={selectEvent}
                    deleteEvent={deleteEvent}
                />
            ))}
        </>
    );
};

export default EventList;
