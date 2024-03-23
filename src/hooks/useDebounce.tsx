import { useEffect, useState } from 'react';

interface Option {
    callback?: (value: number | string) => void;
    delay: number;
    value: number | string;
}

export default function useDebounce(option: Option) {
    const { callback, delay, value } = option;
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            callback?.(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay, value]);

    return debouncedValue;
}
