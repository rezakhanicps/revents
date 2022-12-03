import { PropsWithChildren } from 'react';
import { Modal } from 'semantic-ui-react';
import { useModalAction } from '../../hooks';

interface ModalWrapperProps extends PropsWithChildren {
    size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen' | undefined;
    header: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
    children,
    header,
    size,
}) => {
    const { closeModal } = useModalAction();

    return (
        <Modal open={true} size={size} onClose={() => closeModal()}>
            {header && <Modal.Header>{header} </Modal.Header>}
            <Modal.Content>{children}</Modal.Content>
        </Modal>
    );
};

export default ModalWrapper;
