import './styles.css';
import { Component } from 'react';
import { UserCard } from '../../components/UserCard';
import { loadUsers } from '../../utils/loadUsers';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            counter: 0,
            users: [],
            allUsers: [],
            page: 0,
            usersPerPage: 4
        }
    }

    componentDidMount() {
        this.fillUsers();
        this.setState({
            name: 'Willian Pacheco',
            counter: 0
        })
    }

    fillUsers = async () => {
        const { page, usersPerPage } = this.state;
        const usersAndPhotos = await loadUsers();

        this.setState({
            users: usersAndPhotos.slice(page, usersPerPage),
            allUsers: usersAndPhotos,
        });
    }

    componentDidUpdate() {
        console.log("The component has been updated!");
    }

    componentWillUnmount() {
        console.log("The component will unmount");
    }

    handleCounterClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {

        const { name, counter, users } = this.state;

        return (
            <div className='container'>
                <div className='users'>
                    {
                        users.map(
                            user => (
                                <UserCard key={user.id} user={user} />
                            )
                        )
                    }

                </div>
            </div>
        );
    }
}