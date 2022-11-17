import React, { useCallback, useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Button = () => {
    const { state, setState } = useContext(GlobalContext);

    const handleButtonClick = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            reverse: !prevState.reverse,
        }));
    }, [setState]);

    return (
        <button type="button" onClick={handleButtonClick}>
            {state.text}
        </button>
    );
};
