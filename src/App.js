import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const messages = [
        {
            role: 'system',
            content: 'You are a helpful general knowledge expert.'
        },
        {
            role: 'user',
            content: 'Who invented the television?'
        }
    ];

    useEffect(() => {
        loadAI();
        // eslint-disable-next-line
    }, []);

    const loadAI = async () => {
        const response = await fetch('http://localhost:5050/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages })
        });
        const data = await response.json();
        console.log('AI Response:', data);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
