import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
    const [state, dispatch] = useCounterContext();
    return <h1>Oi</h1>;
};
