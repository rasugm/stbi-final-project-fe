import { useState } from 'react';

interface ImageProps {
	src: string;
	alt: string;
	className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
    const [error, setError] = useState(false);

    const handleImageError = () => {
        setError(true);
    };

    return (
        <div>
            {error ? (
                <img src="https://via.placeholder.com/150" alt="default-content" className={className} />
            ) : (
                <img src={src} alt={alt} onError={handleImageError} className={className} />
            )}
        </div>
    );
};

export default Image;
