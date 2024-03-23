import clsx from 'clsx';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    src?: string;
}
function Avatar(props: Props) {
    const { containerClassName, className, src, children } = props;
    return (
        <div className={clsx('avatar', children && 'placeholder', containerClassName)}>
            <div className={clsx('w-10', className)}>{src ? <img alt="avatar" src={src} /> : children}</div>
        </div>
    );
}

Avatar.defaultProps = {
    containerClassName: '',
    src: undefined,
    children: <></>,
    className: '',
};
export default Avatar;
