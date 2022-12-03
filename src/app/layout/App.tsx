import EventDashBoard from '../../features/events/event-dashboard/event-dashboard';
import NavBar from '../../features/nav/nav-bar';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/home-page';
import EventDetailedPage from '../../features/events/event-detailed/event-detailed-page';
import EventForm from '../../features/events/event-form/event-form';
import Sandbox from '../../features/sandbox/sandbox';
import ModalManager from '../common/modals/modal-manager';

function App() {
    const { key } = useLocation();
    return (
        <>
            <ModalManager />
            <Route path='/' exact component={HomePage} />
            <Route
                path={'/(.+)'}
                render={() => (
                    <>
                        <NavBar />
                        <Container className='main'>
                            <Route
                                path='/events'
                                exact
                                component={EventDashBoard}
                            />
                            <Route path='/sandbox' exact component={Sandbox} />
                            <Route
                                path='/events/:id'
                                component={EventDetailedPage}
                            />
                            <Route
                                path={['/createEvent', '/manage/:id']}
                                component={EventForm}
                                key={key}
                            />

                            {/* so much important another way for show events  */}
                            {/* <EventDashBoard
                        formOpen={formOpen}
                        setFormOpen={setFormOpen}
                        selectEvent={handleSelectEvent}
                        selectedEvent={selectedEvent}
                    /> */}
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default App;
