import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
    const [state, actions] = useCounterContext();

    return (
        <div>
            <Heading />
            <div>
                <Button onButtonClick={actions.increase}>Increase</Button>
                <Button onButtonClick={actions.decrease}>Decrease</Button>
                <Button onButtonClick={actions.reset}>Reset</Button>
                <Button
                    onButtonClick={() => actions.setCounter({ counter: 10 })}
                >
                    SetCounter 10
                </Button>
                <Button
                    onButtonClick={() => actions.setCounter({ counter: 100 })}
                >
                    SetCounter 100
                </Button>
                <Button
                    isDisabled={state.loading}
                    onButtonClick={actions.asyncIncrease}
                >
                    Async Increase
                </Button>
            </div>
        </div>
    );
};
