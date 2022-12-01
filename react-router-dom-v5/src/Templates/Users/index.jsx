import { useParams } from 'react-router-dom';
import './styles.css';

export const Users = () => {
    const { id } = useParams();

    return (
        <>
            <h1>User: {id}</h1>
        </>
    );
};
