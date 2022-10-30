import './styles.css'

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