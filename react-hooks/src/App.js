import logo from './logo.svg';
import './App.css';
import React, { useContext, useMemo, useRef } from 'react';
import { Button } from './components/MyButton';
import { GlobalContext } from './contexts/AppContext';

function App() {
    const context = useContext(GlobalContext);

    const image = useRef(null);

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
