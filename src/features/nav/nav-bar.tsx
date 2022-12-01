import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './signed-in-menu';
import SignedOutMenu from './signed-out-menu';

interface NavBarProps {
    // setFromOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    const handleSignedOut = () => {
        setAuthenticated(false);
        history.push('/');
    };

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header name='home'>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{ marginRight: 15 }}
                    />
                    Re-events
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='events' />
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent' name='create'>
                        <Button
                            positive
                            inverted
                            content='Create event'
                        />
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu signOut={handleSignedOut} />
                ) : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                )}
            </Container>
        </Menu>
    );
};

export default NavBar;
