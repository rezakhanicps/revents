import { Menu, Container, Button } from 'semantic-ui-react';

const NavBar: React.FC = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{ marginRight: 15 }}
                    />
                    Re-events
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button positive inverted content='Create event' />
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
