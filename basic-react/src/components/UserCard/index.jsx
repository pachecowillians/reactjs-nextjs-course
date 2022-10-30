import './styles.css'

export const UserCard = ({ user }) => {
    return (
        <div className='user'>
            <img src={user.photo} alt={user.name} />
            <div className='user-info'>
                <h3>{user.name}</h3>
                <span>{user.email}</span>
            </div>
        </div>
    )
}