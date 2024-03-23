import { Player } from '@lottiefiles/react-lottie-player';

const LOTTIE_LOADING = [
    'https://lottie.host/a2a14070-642d-4b0a-86ef-a1b8546a6609/JH13weFYPJ.json'
];

const FullPageSpinner = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center absolute left-0 right-0 bottom-0 top-0 bg-white/50 backdrop-blur-sm z-[9999]">
                <div>
                    <Player
                        autoplay
                        loop
                        src={LOTTIE_LOADING[0]}
                        style={{ height: '100%', width: '300px' }}
                    />
                </div>
                <h5>
                    Loading...
                </h5>
            </div>
        </>
    );
};

export default FullPageSpinner;
