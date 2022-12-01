import EventDashBoard from './features/events/event-dashboard/event-dashboard';
import NavBar from './features/nav/nav-bar';
import { Container } from 'semantic-ui-react';

function App() {
    return (
        <>
            <NavBar />
            <Container className='main'>
                <EventDashBoard />
            </Container>
        </>
    );
}

export default App;
