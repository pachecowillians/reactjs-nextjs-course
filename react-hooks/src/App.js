import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ handleClick }) {
    console.log('Son rendered');
    return (
        <button type="button" onClick={handleClick}>
            Reverse
        </button>
    );
});

Button.propTypes = {
    handleClick: propTypes.func,
};

function App() {
    const [reverse, setReverse] = useState(false);

    // useEffect(() => {
    //     console.log('componentDidUpdate');
    // });

    // useEffect(() => {
    //     console.log('componentDidMount');
    // }, []);

    // useEffect(() => {
    //     console.log('reverse updated to: ', reverse);
    // }, [reverse]);

    // useEffect(() => {
    //     return () => {
    //         console.log('componentWillUmount');
    //     };
    // }, []);

    console.log('Father rendered');

    const handleClick = useCallback(() => {
        setReverse((prevReverse) => !prevReverse);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className={`App-logo${reverse ? '-reverse' : ''}`}
                    alt="logo"
                />
                <Button handleClick={handleClick} />
            </header>
        </div>
    );
}

export default App;
