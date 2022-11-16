import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        console.log('componentDidUpdate');
    });

    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('reverse updated to: ', reverse);
    }, [reverse]);

    useEffect(() => {
        return () => {
            console.log('componentWillUmount');
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className={`App-logo${reverse ? '-reverse' : ''}`}
                    alt="logo"
                />
                <button
                    type="button"
                    onClick={() => {
                        setReverse((prevReverse) => !prevReverse);
                    }}
                >
                    Reverse
                </button>
            </header>
        </div>
    );
}

export default App;
