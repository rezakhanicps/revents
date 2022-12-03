import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useAppSelector, useAuthAction } from '../../app/hooks';
import { selectAuth } from '../auth/auth-slice';

const SignedInMenu: React.FC = () => {
    const { currentUser } = useAppSelector(selectAuth);
    const { signOutUser } = useAuthAction();
    const history = useHistory();

    return (
        <Menu.Item position='right'>
            <Image
                avatar
                spaced='right'
                src={currentUser?.photoURL || '/assets/user.png'}
            />
            <Dropdown pointing='top left' text={currentUser?.email}>
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to='/createEvent'
                        text='Create Event'
                        icon='plus'
                    />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item
                        onClick={() => {
                            signOutUser();
                            history.push('/');
                        }}
                        text='Sign out'
                        icon='power'
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default SignedInMenu;
