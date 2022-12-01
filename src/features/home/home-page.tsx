import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react';

const HomePage: React.FC = () => {
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
                <Button size='huge' inverted>
                    Get started
                    <Icon name='arrow right' inverted />
                </Button>
            </Container>
        </Segment>
    );
};

export default HomePage;
