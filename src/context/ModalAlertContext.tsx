import ModalAlert, { TModalAlert } from '@/components/modals/ModalAlert/ModalAlert';
import useModal from '@/hooks/useModal';
import React, { createContext } from 'react';

type TOpenModalAlert = Omit<TModalAlert, 'isOpen' | 'onClose'>;
type TContextValue = {
    closeModalAlert: () => void;
    modalAlert: boolean;
    openModalAlert: (param: TOpenModalAlert) => void;
};
const ModalAlertContext = createContext<TContextValue | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

const ModalAlertProvider = ({ children }: Props) => {
    const {
        isOpen: modalAlert,
        onClose: closeModalAlert,
        onOpen: openModalAlert,
        data: dataAlert,
    } = useModal({
        aditionalData: {
            type: '',
            title: '',
            desc: '',
            size: 'md',
            centered: false,
            onSubmit: undefined,
            onClose: null,
            images: undefined,
            labelYes: '',
            hideBtnClose: false,
            labelClose: '',
        },
    });

    const contextValue: TContextValue = {
        modalAlert,
        closeModalAlert,
        openModalAlert,
    };
    const handleClose = () => {
        if (dataAlert && dataAlert.onClose) {
            dataAlert.onClose();
        }
        closeModalAlert();
    };

    return (
        <ModalAlertContext.Provider value={contextValue}>
            {children}
            <ModalAlert
                isOpen={modalAlert}
                labelClose={dataAlert?.labelClose}
                labelYes={dataAlert?.labelYes}
                onClose={handleClose}
                onSubmit={dataAlert?.onSubmit}
                title={dataAlert?.title}
                desc={dataAlert?.desc}
                centered={dataAlert?.centered}
                size={dataAlert?.size}
                hideBtnClose={dataAlert?.hideBtnClose}
                images={dataAlert?.images}
                type={dataAlert?.type}
            />
        </ModalAlertContext.Provider>
    );
};

export { ModalAlertContext, ModalAlertProvider };
