import propTypes from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = () => {
    const [state, actions] = useCounterContext();

    return <button onClick={actions.increase}>Increase</button>;
};
