import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { usePopper, Modifier } from 'react-popper';
import * as PopperJS from '@popperjs/core';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

type ChildrenFunction = ({ styles }: { styles: { [key: string]: React.CSSProperties } }) => JSX.Element;
interface Props<T = any> {
    anchorRef?: React.RefObject<any>;
    animation?:
        | 'fade'
        | 'popup-bottom'
        | 'popup-center'
        | 'popup-left'
        | 'popup-right'
        | 'popup-top'
        | 'slide-down'
        | 'zoom-in'
        | 'zoom-out';
    attachToBody?: boolean;
    backgroundColor?: React.CSSProperties['backgroundColor'];
    backgroundColorArrow?: React.CSSProperties['backgroundColor'];
    children: ChildrenFunction | React.ReactNode;
    className?: string;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    options?: Omit<Partial<PopperJS.Options>, 'modifiers'> & {
        createPopper?: typeof PopperJS.createPopper;
        modifiers?: ReadonlyArray<Modifier<T>>;
    };
    showArrow?: boolean;
    style?: React.CSSProperties;
    zIndex?: React.CSSProperties['zIndex'];
}

const noop = () => {};

const Popper: React.FC<Props> = ({
    anchorRef,
    attachToBody,
    backgroundColor,
    backgroundColorArrow,
    children,
    className,
    onClose,
    onOpen,
    open,
    options,
    showArrow,
    style,
    zIndex,
    animation,
}) => {
    useOnClickOutside(anchorRef as any, () => (open ? onClose?.() : noop()));

    const popperRef = useRef(null);
    const [arrowRef, setArrowRef] = useState<any | null>(null);

    const { styles, attributes, update } = usePopper(
        anchorRef?.current ? anchorRef.current : anchorRef,
        popperRef.current,
        {
            placement: 'bottom-start',
            modifiers: [{ name: 'arrow', options: { element: arrowRef } }],
            ...options,
        }
    );

    useEffect(() => {
        if (update && anchorRef) {
            update();
        }
    }, [open, update, anchorRef]);

    const component = (
        <div
            data-testid="test-popper"
            onClick={(e) => {
                e.stopPropagation();
                onClose?.();
            }}
            ref={popperRef}
            style={{ ...styles.popper, zIndex }}
        >
            <CSSTransition classNames={animation} in={open} timeout={300} unmountOnExit>
                <div
                    className={clsx('relative popper shadow-[0px_4px_20px_rgba(0,0,0,0.15)] rounded', className)}
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpen?.();
                    }}
                    style={{ zIndex, ...style }}
                    {...attributes.popper}
                >
                    <div className={clsx('bg-white rounded overflow-hidden')} style={{ backgroundColor }}>
                        {typeof children === 'function' ? children({ styles }) : children}
                    </div>
                    <div
                        className={clsx('h-4 w-4 popper-arrow z-[-1] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)]', {
                            hidden: !showArrow,
                        })}
                        ref={setArrowRef}
                        style={{
                            ...styles.arrow,
                            transform: `${styles?.arrow?.transform} rotate(45deg)`,
                            backgroundColor: backgroundColorArrow || backgroundColor,
                            right: options?.placement === 'left' ? 0 : '',
                            bottom: options?.placement === 'top' ? 0 : '',
                        }}
                    />
                </div>
            </CSSTransition>
        </div>
    );

    return attachToBody ? createPortal(component, document.body) : component;
};

Popper.defaultProps = {
    anchorRef: undefined,
    animation: 'popup-center',
    attachToBody: false,
    backgroundColor: undefined,
    backgroundColorArrow: undefined,
    className: '',
    onClose: undefined,
    onOpen: undefined,
    open: false,
    options: {},
    showArrow: true,
    style: {},
    zIndex: 1000,
};

export default Popper;
