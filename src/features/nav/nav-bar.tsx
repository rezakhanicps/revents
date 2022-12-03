import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../auth/auth-slice';
import SignedInMenu from './signed-in-menu';
import SignedOutMenu from './signed-out-menu';

const NavBar: React.FC = () => {
    const { authenticated } = useAppSelector(selectAuth);

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
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent' name='create'>
                        <Button positive inverted content='Create event' />
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu  />
                ) : (
                    <SignedOutMenu  />
                )}
            </Container>
        </Menu>
    );
};

export default NavBar;
