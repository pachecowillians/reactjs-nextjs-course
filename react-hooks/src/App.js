import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

const AppContext = createContext();

const Button = () => {
    const { buttonProps } = useContext(AppContext);

    return (
        <button type="button" onClick={buttonProps.handleClick}>
            {buttonProps.text}
        </button>
    );
};

Button.propTypes = {
    handleClick: propTypes.func,
};

function App() {
    const [reverse, setReverse] = useState(false);

    const image = useRef(null);

    const [buttonProps, setButtonProps] = useState({});

    // const handleImageClick = () => {
    //     console.log(image.current.src);
    // };

    const handleClick = useCallback(() => {
        setReverse((prevReverse) => !prevReverse);
    }, []);

    // useEffect(() => {
    //     console.log('componentDidUpdate');
    // });

    useEffect(() => {
        // console.log('componentDidMount');
        setButtonProps({
            text: 'Reverse',
            handleClick: handleClick,
        });
    }, [handleClick]);

    // useEffect(() => {
    //     console.log('reverse updated to: ', reverse);
    // }, [reverse]);

    // useEffect(() => {
    //     return () => {
    //         console.log('componentWillUmount');
    //     };
    // }, []);

    return (
        <AppContext.Provider value={{ buttonProps, setButtonProps }}>
            <div className="App">
                <header className="App-header">
                    <img
                        ref={image}
                        src={logo}
                        className={`App-logo${reverse ? '-reverse' : ''}`}
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
        </AppContext.Provider>
    );
}

export default App;
