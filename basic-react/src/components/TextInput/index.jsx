import propTypes from 'prop-types';

import './styles.css';

export const TextInput = ({ value, onChange }) => {
    return (
        <input
            type="search"
            name="find-users"
            id="find-users"
            className='input'
            placeholder='Type your search'
            value={value}
            onChange={onChange}
        />
    )
}

TextInput.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}