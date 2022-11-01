import './styles.css';
import { Component, useCallback, useEffect, useState } from 'react';
import { UserCard } from '../../components/UserCard';
import { loadUsers } from '../../utils/loadUsers';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(4);
    const [allUsers, setAllUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const noMoreUsers = page + usersPerPage >= allUsers.length;

    const filteredUsers = !!searchValue ?
        allUsers.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
        :
        users;

    const fillUsers = useCallback(async (page, usersPerPage) => {
        const usersAndPhotos = await loadUsers();

        setUsers(usersAndPhotos.slice(page, usersPerPage));
        setAllUsers(usersAndPhotos);
    }, []);

    useEffect(() => {
        fillUsers(0, usersPerPage);
    }, [fillUsers, usersPerPage]);

    const loadMoreUsers = () => {
        const nextPage = page + usersPerPage;
        const nextUsers = allUsers.slice(nextPage, nextPage + usersPerPage);

        users.push(...nextUsers);

        setUsers(users);
        setPage(nextPage);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    return (
        <div className='container'>
            {
                !!searchValue && (
                    <h1>Search value: {searchValue}</h1>
                )
            }
            <TextInput value={searchValue} onChange={handleChange} />

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
                    onClick={loadMoreUsers}
                />
            )}
        </div>
    );
}