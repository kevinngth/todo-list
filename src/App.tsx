import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';

export const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <List />
                <Form />
            </header>
        </div>
    );
};

export default App;
