import cuid from 'cuid';
import { Formik, Form } from 'formik';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react';
import { useAppSelector, useEventAction } from '../../../app/hooks';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/my-text-input';
import MyTextArea from '../../../app/common/form/my-text-area';

const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required('You must provide a description'),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
});

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

    return (
        <Segment clearing>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
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
                }}
            >
                <Form className='ui form'>
                    <Header sub color='teal' content='Event Details' />
                    <MyTextInput name='title' placeholder='Event title' />
                    <MyTextInput name='category' placeholder='Category' />
                    <MyTextArea
                        name='description'
                        placeholder='Description'
                        rows={3}
                    />
                    <Header sub color='teal' content='Event Location Details' />
                    <MyTextInput name='city' placeholder='City' />
                    <MyTextInput name='venue' placeholder='Venue' />
                    <MyTextInput
                        name='date'
                        placeholder='Event date'
                        type='date'
                    />

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
