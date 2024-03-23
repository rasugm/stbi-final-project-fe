import { useEffect, useCallback, useRef } from 'react';
import { useBeforeUnload, unstable_useBlocker as useBlocker, useLocation } from 'react-router-dom';

type Props = {
    hasUnsavedChanges: any;
    message?: string;
};

const FormPrompt = ({
    hasUnsavedChanges,
    message = 'Anda memiliki perubahan yang belum disimpan, yakin ingin keluar?',
}: Props) => {
    const location = useLocation();
    const onLocationChange = useCallback(
        ({ nextLocation }: any) => {
            if (nextLocation.pathname !== location.pathname && hasUnsavedChanges) {
                return !window.confirm(message);
            }
            return false;
        },
        [hasUnsavedChanges, message, location.pathname]
    );

    usePrompt(onLocationChange, hasUnsavedChanges);
    useBeforeUnload(
        useCallback(
            (event) => {
                if (hasUnsavedChanges) {
                    event.preventDefault();
                    event.returnValue = '';
                }
            },
            [hasUnsavedChanges]
        ),
        { capture: true }
    );

    return null;
};

export default FormPrompt;

function usePrompt(onLocationChange: any, hasUnsavedChanges: any) {
    const blocker = useBlocker(hasUnsavedChanges ? onLocationChange : false);
    const prevState = useRef(blocker.state);

    useEffect(() => {
        if (blocker.state === 'blocked') {
            blocker.reset();
        }
        prevState.current = blocker.state;
    }, [blocker]);
}
