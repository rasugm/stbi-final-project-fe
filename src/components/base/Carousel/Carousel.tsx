import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface CarouselProps {
    images: Array<any>;
}

const Carousel = ({ images }: CarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const isActiveIndicator = (index: number) => {
        return index === currentIndex ? 'bg-white' : 'bg-white opacity-50';
    };

    function indicator () {

        let length = images.length;
        let indicator_list = [];

        if (images.length > 1) {
            for (let i = 0; i < length; i++) {
                indicator_list.push(
                    <div
                        key={i}
                        className={`w-[20px] h-[5px] rounded-full ${isActiveIndicator(i)} cursor-pointer`}
                        onClick={() => setCurrentIndex(i)}
                    />
                );
            }
        }

        return indicator_list;
    }

    // AUTOPLAY CAROUSEL EVERY 3 SECONDS
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex, images.length]);


    return (
        <div className="relative">

            {
                images.map((image, index) => (
                    index === currentIndex ?
                        <div key={`item-carousel-${index}`}>
                            <Player
                                autoplay
                                loop
                                src={image?.url}
                                style={{ height: '300px', width: '300px' }}
                            />

                            <div className="w-full text-center mb-[25px]">
                                <div>
                                    <h6 className="text-white">
                                        {image?.title}
                                    </h6>
                                    <small className="text-white opacity-60">
                                        {image?.description}
                                    </small>
                                </div>
                            </div>
                        </div> : null
                ))
            }

            <div className="w-full flex justify-center items-center gap-1">
                {indicator()}
            </div>
        </div>
    );
};

export default Carousel;