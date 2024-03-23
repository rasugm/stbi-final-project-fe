import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clsx from 'clsx';
import './ImageSlider.css';
import { cn } from '@/utils/className';
import { IL_DEFAULT_IMG } from '@/configs/images';

const settings = (listImage: number[] | string[]) => {
    return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: listImage?.length < 3 ? listImage?.length : 3,
        slidesToScroll: listImage?.length < 3 ? listImage?.length : 3,
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: listImage?.length < 3 ? listImage?.length : 3,
                    slidesToScroll: listImage?.length < 3 ? listImage?.length : 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: listImage?.length < 3 ? listImage?.length : 2,
                    slidesToScroll: listImage?.length < 3 ? listImage?.length : 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: listImage?.length < 3 ? listImage?.length : 3,
                    slidesToScroll: listImage?.length < 3 ? listImage?.length : 3,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: listImage?.length < 3 ? listImage?.length : 2,
                    slidesToScroll: listImage?.length < 3 ? listImage?.length : 2,
                },
            },
        ],
    };
};

type Props = {
    classNameMainImg?: string;
    isLoading?: boolean;
    listImage: string[];
};

const ImageSlider = ({ listImage = [], isLoading, classNameMainImg }: Props) => {
    const [mainImg, setMainImg] = useState('');
    useEffect(() => {
        if (listImage.length > 0) {
            setMainImg(listImage[0] ?? '');
        } else {
            setMainImg(IL_DEFAULT_IMG);
        }
    }, [listImage]);
    const sliderRef = useRef(null);

    function addDefaultSrc(e: any) {
        e.target.onerror = null;
        e.target.src = IL_DEFAULT_IMG;
        e.target.srcset = IL_DEFAULT_IMG;
    }

    if (isLoading) {
        return (
            <>
                <div
                    className={'wrapper-main-image'}
                    style={{
                        zIndex: 1,
                    }}
                >
                    <div className="image-loading" />
                </div>
                <div className="w-full overflow-clip">
                    <Slider {...settings([1, 2, 3, 4, 5, 6])} ref={sliderRef}>
                        {Array(10)
                            .fill('')
                            .map((_, i) => (
                                <div className={clsx('image-item')} key={i}>
                                    <div className="image-loading" />
                                </div>
                            ))}
                    </Slider>
                </div>
            </>
        );
    }
    return (
        <div className="position-relative">
            <div
                className={cn('wrapper-main-image', classNameMainImg)}
                style={{
                    zIndex: 1,
                }}
            >
                <img
                    alt={'thumbnail'}
                    onError={addDefaultSrc}
                    placeholder="blur"
                    src={mainImg || listImage[0]}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="image-loading" />
            </div>
            {listImage?.length > 1 && (
                <div className="wrapper-list-image">
                    <Slider {...settings(listImage)} ref={sliderRef}>
                        {listImage.map((item, i) => (
                            <div className={clsx('image-item')} key={i}>
                                <img
                                    alt={item}
                                    onClick={() => setMainImg(item)}
                                    onError={addDefaultSrc}
                                    placeholder="blur"
                                    src={item}
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                                {mainImg === item && <div className="backdrop-selected-image" />}
                                <div className="image-loading" />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
ImageSlider.defaultProps = {
    isLoading: false,
    classNameMainImg: '',
};
