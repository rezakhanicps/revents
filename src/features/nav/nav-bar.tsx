import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './signed-in-menu';
import SignedOutMenu from './signed-out-menu';

interface NavBarProps {
    setFromOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ setFromOpen }) => {
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
                <Menu.Item as={NavLink} to='/createEvent' name='create'>
                    <Button
                        // onClick={() => setFromOpen(true)}
                        positive
                        inverted
                        content='Create event'
                    />
                </Menu.Item>
                <SignedOutMenu />
                <SignedInMenu />
            </Container>
        </Menu>
    );
};

export default NavBar;
