import './styles.css'

export const Button = ({ text, onClick }) => {
    return (
        <button
            className='load-more'
            type='button'
            onClick={onClick}
        >
            {text}
        </button>
    )
}