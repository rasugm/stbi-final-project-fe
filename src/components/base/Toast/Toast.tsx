import clsx from 'clsx';
import { toast } from 'react-toastify';
import { getStatusMsg, TGetStatusMsg } from '@/utils/getStatusMsg';

const defaultOption = {
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: true,
};

type PropsMsgComponent = {
    message?: string;
    option?: typeof defaultOption;
    title: TGetStatusMsg;
    type?: 'dark' | 'error' | 'info' | 'success' | 'warning';
    onClose?: () => void;
};

const Toast = ({ type = 'success', title, message, option = defaultOption, onClose }: PropsMsgComponent) => {
    const msgComponent = ({ type, message, title }: PropsMsgComponent) => (
        <div className="">
            <p className={clsx('font-weight-bold mt-0', type === 'error' && 'text-danger')}>{getStatusMsg(title)}</p>
            {message && <span className={clsx('text-sm block mt-2')}>{message}</span>}
        </div>
    );

    toast[type](msgComponent({ message, title, type }), { ...option, onClose });
    return;
};

export default Toast;
