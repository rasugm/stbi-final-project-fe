import { Player } from '@lottiefiles/react-lottie-player';
import { Modal } from '..';
import { LOADING_LOTTIE_TYPE_A } from '@/configs/lottie';

interface LoadingProps {
    isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
    return (
        <Modal
            isOpen={isLoading}
            onClose={() => {
            }}
            isCentered={true}
            size="xs"
        >
            <div className="flex justify-center flex-col items-center m-0 gap-3">
                <Player
                    autoplay
                    loop
                    src={LOADING_LOTTIE_TYPE_A}
                    style={{ height: '110px', width: '110px' }}
                />
            </div>
        </Modal>
    );
};

export default Loading;