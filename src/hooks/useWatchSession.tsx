import { SESSION_ACTIVE } from '@/configs';
import memoize from '@/utils/memoize';
import { accessToken, refreshToken, sessionActive } from '@/utils/storage';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type Options = {
	expired: number; //in second
};
const defaultExpired = SESSION_ACTIVE;

export const useWatchSession = (options?: Options) => {
    const location = useLocation();
    const timer = useRef<any>();

    const removeSession = () => {
        accessToken.remove();
        refreshToken.remove();
    };

    const restartSession = () => {
        const rfToken = refreshToken.get();
        refreshToken.set(rfToken, { maxAge: options?.expired || defaultExpired });
        sessionActive.set(true);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            removeSession();
        }, (options?.expired || defaultExpired) * 1000);
    };

    const memoizeRestart = memoize(restartSession, { maxAge: 10 });

    const onMouseMove = () => {
        memoizeRestart();
    };

    useEffect(() => {
        // restartSession();
        if (accessToken.get() || refreshToken.get()) {
            window.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            if (timer) {
                clearTimeout(timer.current);
                window.removeEventListener('mousemove', onMouseMove);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);
    return null;
};
