import propTypes from 'prop-types';
import { createContext, useState } from 'react';
import { initialState } from './data';

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
};

AppContext.propTypes = {
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node,
    ]).isRequired,
};
