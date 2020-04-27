import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Task from '../models/Task';

type Props = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

export const Form: React.FC<Props> = ({ tasks, setTasks }) => {
    const [task, setTask] = React.useState<string>('');

    const addTask = (task: string) => () => {
        const newTasks = [...tasks];
        newTasks.push({ content: task, isDone: false, isEditing: false });
        setTasks(newTasks);
        setTask('');
    };

    return (
        <div>
            <TextField label="New Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <IconButton color="primary" size="medium" onClick={addTask(task)}>
                <AddIcon />
            </IconButton>
        </div>
    );
};
