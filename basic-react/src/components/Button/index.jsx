import './styles.css'

export const Button = ({ text, disabled, onClick }) => {
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