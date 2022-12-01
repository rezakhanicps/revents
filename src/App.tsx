import { useState } from 'react';
import EventDashBoard from './features/events/event-dashboard/event-dashboard';
import NavBar from './features/nav/nav-bar';
import { Container } from 'semantic-ui-react';

function App() {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const handleSelectEvent = (event: Event | null) => {
        setSelectedEvent(event);
        setFormOpen(true);
    };
    const handleCreateFormOpen = () => {
        setSelectedEvent(null);
        setFormOpen(true);
    };
    return (
        <>
            <NavBar setFromOpen={handleCreateFormOpen} />
            <Container className='main'>
                <EventDashBoard
                    formOpen={formOpen}
                    setFormOpen={setFormOpen}
                    selectEvent={handleSelectEvent}
                    selectedEvent={selectedEvent}
                />
            </Container>
        </>
    );
}

export default App;
