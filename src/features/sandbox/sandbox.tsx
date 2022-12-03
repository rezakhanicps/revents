import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { useModalAction } from '../../app/hooks';
import { selectCount } from '../counter/counterSlice';

const Sandbox: React.FC = () => {
    const { openModal } = useModalAction();
    const data = useSelector(selectCount);

    return (
        <>
            <h1>testing 123</h1>
            <h3>the data is : </h3>
            <Button
                onClick={() =>
                    openModal({ modalProps: { data }, modalType: 'TestModal' })
                }
                content='Open Modal'
                color='teal'
            />
        </>
    );
};

export default Sandbox;
