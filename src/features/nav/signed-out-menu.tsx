import { Menu, Button } from 'semantic-ui-react';
import { useModalAction } from '../../app/hooks';
const SignedOutMenu: React.FC = () => {
    const { openModal } = useModalAction();

    return (
        <Menu.Item position='right'>
            <Button
                onClick={() => openModal({ modalType: 'LoginForm' })}
                basic
                inverted
                content='Login'
            />
            <Button
                basic
                inverted
                content='Register'
                style={{ marginLeft: '0.53em ' }}
            />
        </Menu.Item>
    );
};

export default SignedOutMenu;
