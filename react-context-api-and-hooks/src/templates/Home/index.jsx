import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
    const [state, actions] = useCounterContext();

    useEffect(() => {
        actions.increase();
        return () => {};
    }, [actions]);

    return <h1 onClick={() => actions.increase()}>Oi</h1>;
};
