/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, FC, useMemo } from 'react';

interface ITabContext {
    active: number;
    changeTab: (active: number) => number;
}

interface ITabProvider {
    active: number;
    children: React.ReactNode;
    onChange?: (param: number) => void;
}

const state = {
    active: 0,
    changeTab: () => 0,
};

const TabContext = createContext<ITabContext>(state);

const TabProvider: FC<ITabProvider> = ({ active, children, onChange }) => {
    const [initialState, setInitialState] = useState({ ...state, active });
    const changeTab = (active: number) => {
        setInitialState((prev) => ({
            ...prev,
            active,
        }));
        if (onChange) {
            onChange(active);
        }
        return active;
    };

    const values = useMemo(() => {
        return {
            ...initialState,
            changeTab,
        };
    }, [initialState]);

    return <TabContext.Provider value={values}>{children}</TabContext.Provider>;
};

TabProvider.defaultProps = {
    onChange: undefined,
};

export { TabProvider, TabContext };
