import { useState } from 'react';
import EventDashBoard from './features/events/event-dashboard/event-dashboard';
import NavBar from './features/nav/nav-bar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './features/home/home-page';
import EventDetailedPage from './features/events/event-detailed/event-detailed-page';
import EventForm from './features/events/event-form/event-form';

function App() {
    return (
        <>
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
                            <Route
                                path='/events/:id'
                                component={EventDetailedPage}
                            />
                            <Route
                                path={['/createEvent', '/manage/:id']}
                                component={EventForm}
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
