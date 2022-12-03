import TestModal from '../../../features/sandbox/test-modal';
import { useAppSelector } from '../../hooks';
import { selectModal } from './modal-slice';

const ModalManager = () => {
    const modalLookup: any = {
        TestModal,
    };

    const currentModal = useAppSelector(selectModal);
    let renderedModal;
    if (currentModal) {
        const { modalProps, modalType } = currentModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />;
    }

    return <span>{renderedModal}</span>;
};

export default ModalManager;
