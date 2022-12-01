import { Segment, Header, Form, Button } from 'semantic-ui-react';

interface EventFormProps {
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventForm: React.FC<EventFormProps> = ({ setFormOpen }) => {
    return (
        <Segment clearing>
            <Header content='Create new event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Vanue' />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' />
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
