import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const Button = ({ handleClick }) => {
    console.log('Son rendered');
    return (
        <button type="button" onClick={handleClick}>
            Reverse
        </button>
    );
};

Button.propTypes = {
    handleClick: propTypes.func,
};

function App() {
    const [reverse, setReverse] = useState(false);

    const image = useRef(null);

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

    const handleImageClick = () => {
        console.log(image.current.src);
    };

    const handleClick = useCallback(() => {
        setReverse((prevReverse) => !prevReverse);
    }, []);

    return (
        <div className="App">
            <header className="App-header" onClick={handleImageClick}>
                <img
                    ref={image}
                    src={logo}
                    className={`App-logo${reverse ? '-reverse' : ''}`}
                    alt="logo"
                />
                {useMemo(
                    () => (
                        <Button handleClick={handleClick} />
                    ),
                    [handleClick],
                )}
            </header>
        </div>
    );
}

export default App;
