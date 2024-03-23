import React, { useState } from 'react';
import TextField from '../TextField';
import { BiSearch } from 'react-icons/bi';
import useDebounce from '@/hooks/useDebounce';

interface Props extends React.ComponentProps<typeof TextField> {
    delay?: number;
}

const Search = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { delay, value: valueProps, ...rest } = props;
    const [value, setValue] = useState(valueProps || '');
    useDebounce({
        value: `${value}`,
        delay: delay || 1000,
        callback: (val) => {
            rest.onChange?.({ target: { value: val } } as React.ChangeEvent<HTMLInputElement>);
        },
    });

    return (
        <TextField
            startAdornment={
                <div className="grid place-content-center pl-4">
                    <BiSearch size={20} />
                </div>
            }
            {...rest}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            ref={ref}
            value={value}
        />
    );
});

Search.defaultProps = {
    delay: 1000,
};
export default Search;
