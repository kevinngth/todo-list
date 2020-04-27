import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type Props = {
    tasks: string[];
    setTasks: (tasks: string[]) => void;
};

export const Form: React.FC<Props> = ({ tasks, setTasks }) => {
    const [task, setTask] = React.useState<string>('');

    const handleClick = (task: string) => () => {
        const newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks);
        setTask('');
    };

    return (
        <div>
            <TextField label="New Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <IconButton color="primary" size="medium" onClick={handleClick(task)}>
                <AddIcon />
            </IconButton>
        </div>
    );
};
