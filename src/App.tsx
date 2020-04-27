import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import Task from './models/Task';

export const App: React.FC = () => {
    const [tasks, setTasks] = React.useState<Task[]>([]);
    return (
        <div className="App">
            <header className="App-header">
                <TaskList tasks={tasks} setTasks={setTasks} />
                <Form tasks={tasks} setTasks={setTasks} />
            </header>
        </div>
    );
};

export default App;
