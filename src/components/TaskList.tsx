import React from 'react';
import Task from '../models/Task';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
        },
    }),
);

type Props = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const classes = useStyles();

    const checkTask = (index: number) => () => {
        const newTasks = [...tasks];
        newTasks[index].isDone = !newTasks[index].isDone;
        setTasks(newTasks);
    };

    const deleteTask = (index: number) => () => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <List className={classes.root}>
            {tasks.map((task, index) => {
                return (
                    <ListItem key={index} role={undefined} dense button onClick={checkTask(index)}>
                        <ListItemIcon>
                            <Checkbox color="primary" edge="start" checked={task.isDone} />
                        </ListItemIcon>
                        <ListItemText primary={task.content} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={deleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};
