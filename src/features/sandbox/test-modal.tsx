import { PropsWithChildren } from 'react';
import ModalWrapper from '../../app/common/modals/modal-wrapper';

interface TestModalProps extends PropsWithChildren {
    data: any;
}

const TestModal: React.FC<TestModalProps> = ({ data }) => {
    return (
        <ModalWrapper size='mini' header='Test Modal'>
            <div>The data is: {data}</div>
        </ModalWrapper>
    );
};

export default TestModal;
