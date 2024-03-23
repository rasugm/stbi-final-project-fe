import React, { HTMLProps } from 'react';

function IndeterminateCheckbox({
    indeterminate,
    className = '',
    ...rest
}: HTMLProps<HTMLInputElement> & { indeterminate?: boolean }) {
    const ref = React.useRef<HTMLInputElement>(null!);

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, indeterminate]);

    return <input type="checkbox" ref={ref} className={className + ' cursor-pointer'} {...rest} />;
}

export default IndeterminateCheckbox;

IndeterminateCheckbox.defaultProps = {
    indeterminate: false,
};
