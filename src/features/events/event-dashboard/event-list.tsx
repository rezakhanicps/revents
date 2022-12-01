import EventListItem from './event-list-item';

interface EventListProps {
    events: Event[];
    selectEvent: (e: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, selectEvent }) => {
    return (
        <>
            {events.map((event) => (
                <EventListItem
                    event={event}
                    key={event.id}
                    selectEvent={selectEvent}
                />
            ))}
        </>
    );
};

export default EventList;
