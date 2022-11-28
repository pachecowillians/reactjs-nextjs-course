import propTypes from 'prop-types';

export const Button = ({ children, onButtonClick, isDisabled = false }) => {
    return (
        <button disabled={isDisabled} onClick={onButtonClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: propTypes.node.isRequired,
    onButtonClick: propTypes.func.isRequired,
    isDisabled: propTypes.bool,
};
