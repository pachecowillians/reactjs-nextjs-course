import propTypes from 'prop-types';

export const Button = ({ children, onButtonClick }) => {
    return <button onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
    children: propTypes.node.isRequired,
    onButtonClick: propTypes.func.isRequired,
};
