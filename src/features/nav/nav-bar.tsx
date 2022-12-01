import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

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
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/createEvent' >
                    <Button
                        // onClick={() => setFromOpen(true)}
                        positive
                        inverted
                        content='Create event'
                    />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button
                        basic
                        inverted
                        content='Register'
                        style={{ marginLeft: '0.53em ' }}
                    />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;
