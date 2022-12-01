import { Menu, Button } from 'semantic-ui-react';

interface SignedOutMenuProps {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignedOutMenu: React.FC<SignedOutMenuProps> = ({ setAuthenticated }) => {
    return (
        <Menu.Item position='right'>
            <Button
                onClick={() => setAuthenticated(true)}
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
