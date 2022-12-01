import cuid from 'cuid';
import { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

interface EventFormProps {
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    createEvent: (e: Event) => void;
    selectedEvent: Event | null;
    updateEvent: (e: Event) => void;
}

export const EventForm: React.FC<EventFormProps> = ({
    setFormOpen,
    setEvents,
    createEvent,
    selectedEvent,
    updateEvent,
}) => {
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
        setFormOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <Segment clearing>
            <Header
                content={selectedEvent ? 'Edit the event' : 'Create new event'}
            />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Event title'
                        value={values.title}
                        name='title'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Category'
                        value={values.category}
                        name='category'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Description'
                        value={values.description}
                        name='description'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='City'
                        value={values.city}
                        name='city'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Vanue'
                        value={values.venue}
                        name='venue'
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='date'
                        placeholder='Date'
                        value={values.date}
                        name='date'
                        onChange={handleInputChange}
                    />
                </Form.Field>

                <Button
                    type='submit'
                    floated='right'
                    positive
                    content='Submit'
                />
                <Button
                    onClick={() => setFormOpen(false)}
                    type='submit'
                    floated='right'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
};

export default EventForm;
