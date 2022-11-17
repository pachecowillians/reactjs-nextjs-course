import logo from './logo.svg';
import './App.css';
import React, { useContext, useMemo, useRef } from 'react';
import { Button } from './components/MyButton';
import { GlobalContext } from './contexts/AppContext';
import { useReducer } from 'react';

function App() {
    const context = useContext(GlobalContext);

    const image = useRef(null);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeName':
                return { ...state, title: 'WPS - Changed' };
            case 'hoverName':
                return { ...state, title: 'WPS - Hovered' };
            default:
                break;
        }
        return { ...state };
    };

    const [state, dispatch] = useReducer(reducer, { title: 'WPS' });

    return (
        <div className="App">
            <header className="App-header">
                <img
                    ref={image}
                    src={logo}
                    className={`App-logo${
                        context.state.reverse ? '-reverse' : ''
                    }`}
                    alt="logo"
                />
                <h1
                    onClick={() => dispatch({ type: 'changeName' })}
                    onMouseOver={() => dispatch({ type: 'hoverName' })}
                >
                    {state.title}
                </h1>
                {useMemo(
                    () => (
                        <Button />
                    ),
                    [],
                )}
            </header>
        </div>
    );
}

export default App;
