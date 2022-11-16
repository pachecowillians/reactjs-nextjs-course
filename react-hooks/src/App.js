import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reverse: false,
        };
    }
    render() {
        const { reverse } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={logo}
                        className={`App-logo${reverse ? '-reverse' : ''}`}
                        alt="logo"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            this.setState({ reverse: !reverse });
                        }}
                    >
                        Reverse
                    </button>
                </header>
            </div>
        );
    }
}
export default App;
