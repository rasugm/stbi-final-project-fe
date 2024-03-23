import { WEB } from '@/constants';
import { useNavigate } from 'react-router-dom';

export const useWebNavigate = () => {
    const navigate = useNavigate();
    return (url: keyof typeof WEB, replaceValue?: { key: string; value: string }[]) => {
        let URL = WEB[url];
        if (replaceValue) {
            replaceValue.forEach((replacement) => {
                URL = URL.replace(replacement.key, replacement.value);
            });
        }
        navigate(URL);
    };
};
