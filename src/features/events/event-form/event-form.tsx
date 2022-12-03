import cuid from 'cuid';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Segment, Header, Button, FormField } from 'semantic-ui-react';
import { useAppSelector, useEventAction } from '../../../app/hooks';

interface EventFormProps extends RouteComponentProps {}

export const EventForm: React.FC<EventFormProps> = ({ match, history }) => {
    const selectedEvent = useAppSelector(
        (state) =>
            //@ts-ignore
            state.events.data.find((e) => e.id === match.params.id) as Event
    );

    const { createEvent, updateEvent } = useEventAction();

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };
    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        selectedEvent
            ? updateEvent({ ...selectedEvent, ...values })
            : //@ts-ignore
              createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Bob',
                  attendees: [],
                  hostPhotoURL: './assets/user.png',
              });
        history.push('/events');
    };

    return (
        <Segment clearing>
            <Header
                content={selectedEvent ? 'Edit the event' : 'Create new event'}
            />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
            >
                <Form className='ui form'>
                    <FormField>
                        <Field name='title' placeholder='Event title' />
                    </FormField>
                    <FormField>
                        <Field name='category' placeholder='Category' />
                    </FormField>

                    <FormField>
                        <Field name='description' placeholder='Description' />
                    </FormField>

                    <FormField>
                        <Field name='city' placeholder='City' />
                    </FormField>
                    <FormField>
                        <Field name='venue' placeholder='Venue' />
                    </FormField>

                    <FormField>
                        <Field name='date' placeholder='Event date' type='date' />
                    </FormField>

                    <Button
                        type='submit'
                        floated='right'
                        positive
                        content='Submit'
                    />
                    <Button
                        as={Link}
                        to='/events'
                        type='submit'
                        floated='right'
                        content='Cancel'
                    />
                </Form>
            </Formik>
        </Segment>
    );
};

export default EventForm;
