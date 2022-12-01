import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react';
import { History } from 'history';

interface HomePageProps {
    history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image
                        size='massive'
                        src='/assets/logo.png'
                        style={{ marginBottom: 12 }}
                    />
                    Re-vents
                </Header>
                <Button
                    onClick={() => history.push('/events')}
                    size='huge'
                    inverted
                >
                    Get started
                    <Icon name='arrow right' inverted />
                </Button>
            </Container>
        </Segment>
    );
};

export default HomePage;
