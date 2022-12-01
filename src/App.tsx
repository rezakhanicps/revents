import { useState } from 'react';
import EventDashBoard from './features/events/event-dashboard/event-dashboard';
import NavBar from './features/nav/nav-bar';
import { Container } from 'semantic-ui-react';

function App() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <>
            <NavBar setFromOpen={setFormOpen} />
            <Container className='main'>
                <EventDashBoard formOpen={formOpen} setFormOpen={setFormOpen} />
            </Container>
        </>
    );
}

export default App;
