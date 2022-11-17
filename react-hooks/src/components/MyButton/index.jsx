import React, { useCallback, useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Button = () => {
    const { state, setState } = useContext(GlobalContext);

    console.log('context', state);

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
