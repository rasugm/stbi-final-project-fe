import React, { useRef, useState, useEffect, ComponentProps } from 'react';
import Popper from '../Popper';
import { Placement } from '@popperjs/core';
import { useLocation } from 'react-router-dom';
import { cn } from '@/utils/className';

interface Props extends Omit<ComponentProps<typeof Popper>, 'children' | 'className'> {
    autoHide?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    children:
        | React.ReactElement
        | React.ReactNode
        | (({ open, toggle, close }: { close: Function; open: boolean; toggle: Function }) => JSX.Element);
    className?: string;
    content:
        | React.ReactElement
        | React.ReactNode
        | (({ open, toggle, close }: { close: Function; open: boolean; toggle: Function }) => JSX.Element);
    hideDelay?: number;
    placement?: Placement;
    trigger?: 'click-hover' | 'click' | 'hover';
}

function ContextMenu(props: Props) {
    const { className, children, content, trigger, hideDelay, placement, buttonProps, autoHide, ...popperProps } =
        props;

    const anchorRef = useRef(null);
    const hideTimeout = useRef<any | null>(null);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    let popupTrigger = trigger;

    const handleMouseEnter = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        if (popupTrigger === 'hover' || popupTrigger === 'click-hover') {
            setOpen(true);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        if (popupTrigger === 'click' || popupTrigger === 'click-hover') {
            setOpen(!open);
        }
    };

    const handleMouseLeave = () => {
        if (!autoHide) {
            return null;
        }
        if (hideDelay) {
            hideTimeout.current = setTimeout(() => {
                setOpen(false);
            }, hideDelay);
        } else {
            setOpen(false);
        }
    };

    const events = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };

    const renderButton = () => (
        <button
            {...buttonProps}
            className={cn('flex items-center', className)}
            data-testid="btn-triggerClick"
            onClick={handleClick}
            type="button"
        >
            {typeof children === 'function'
                ? children({ open, toggle: () => setOpen(!open), close: () => setOpen(false) })
                : children}
        </button>
    );

    return (
        <div data-testid="contextMenu-container" ref={anchorRef} onClick={(e) => e.stopPropagation()} {...events}>
            {renderButton()}
            <Popper
                {...popperProps}
                anchorRef={anchorRef}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                options={{
                    strategy: 'fixed',
                    placement: placement || 'bottom-end',
                    ...popperProps.options,
                }}
            >
                {typeof content === 'function'
                    ? content({
                        open,
                        toggle: () => setOpen(!open),
                        close: () => {
                            setOpen(false);
                        },
                    })
                    : content}
            </Popper>
        </div>
    );
}

ContextMenu.defaultProps = {
    autoHide: true,
    buttonProps: {},
    className: '',
    hideDelay: 0,
    placement: 'bottom-end',
    trigger: 'click',
};

export default ContextMenu;
