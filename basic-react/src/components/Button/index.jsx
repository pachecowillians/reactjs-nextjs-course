import propTypes from 'prop-types';

import './styles.css';

export const Button = ({ text, disabled = false, onClick }) => {
    return (
        <button
            type='button'
            className='load-more'
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button >
    )
}

Button.defaultProps = {
    disabled: false,
}

Button.propTypes = {
    text: propTypes.string.isRequired,
    disabled: propTypes.bool,
    onClick: propTypes.func.isRequired,
}