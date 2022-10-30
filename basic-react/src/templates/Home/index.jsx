import './styles.css';
import { Component } from 'react';
import { UserCard } from '../../components/UserCard';
import { loadUsers } from '../../utils/loadUsers';
import { Button } from '../../components/Button';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            allUsers: [],
            page: 0,
            usersPerPage: 4,
            searchValue: ''
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

    loadMorePosts = () => {
        const { page, usersPerPage, allUsers, users } = this.state;

        const nextPage = page + usersPerPage;
        const nextUsers = allUsers.slice(nextPage, nextPage + usersPerPage);
        users.push(...nextUsers);
        this.setState({
            users: users,
            page: nextPage
        })
    }

    componentDidUpdate() {
        // console.log("The component has been updated!");
    }

    componentWillUnmount() {
        // console.log("The component will unmount");
    }

    handleCounterClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value });
    }

    render() {

        const { users, page, usersPerPage, allUsers, searchValue } = this.state;
        const noMoreUsers = page + usersPerPage >= allUsers.length;

        const filteredUsers = !!searchValue ?
            allUsers.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
            :
            users;

        return (
            <div className='container'>
                {
                    !!searchValue && (
                        <h1>Search value: {searchValue}</h1>
                    )
                }
                <input
                    type="search"
                    name="find-users"
                    id="find-users"
                    value={searchValue}
                    onChange={this.handleChange} />

                {filteredUsers.length > 0 ?
                    (
                        <div className='users'>
                            {
                                filteredUsers.map(
                                    user => (
                                        <UserCard key={user.id} user={user} />
                                    )
                                )
                            }

                        </div>
                    )
                    :
                    (
                        <h3>No users found!</h3>
                    )}

                {!searchValue && (
                    <Button
                        text="Load more"
                        disabled={noMoreUsers}
                        onClick={this.loadMorePosts}
                    />
                )}
            </div>
        );
    }
}