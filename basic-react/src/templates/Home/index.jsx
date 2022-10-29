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
            users: []
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
        this.setState({ users: await loadUsers() });
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

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
