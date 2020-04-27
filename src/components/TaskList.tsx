import React, { useState } from 'react';
import Task from '../models/Task';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
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

    const startEditingTask = (index: number) => () => {
        const newTasks = [...tasks];
        const currentEdit = newTasks.find((task) => task.isEditing === true);
        currentEdit && (currentEdit.content = holdingContent);
        currentEdit && (currentEdit.isEditing = false);
        setHoldingContent(newTasks[index].content);
        newTasks[index].isEditing = true;
        setTasks(newTasks);
    };

    const [holdingContent, setHoldingContent] = useState<string>('');

    const endEditingTask = (index: number) => () => {
        const newTasks = [...tasks];
        newTasks[index].content = holdingContent;
        newTasks[index].isEditing = false;
        setTasks(newTasks);
    };

    return (
        <List className={classes.root}>
            {tasks.map((task, index) => {
                return (
                    <ListItem key={index} role={undefined} dense button>
                        <ListItemIcon onClick={checkTask(index)}>
                            <Checkbox color="primary" edge="start" checked={task.isDone} />
                        </ListItemIcon>
                        {task.isEditing ? (
                            <>
                                <input
                                    defaultValue={task.content}
                                    style={{ width: 300 }}
                                    onChange={(e) => setHoldingContent(e.target.value)}
                                />
                                <EditOutlinedIcon onClick={endEditingTask(index)} />
                            </>
                        ) : (
                            <>
                                <ListItemText primary={task.content} />
                                <EditIcon onClick={startEditingTask(index)} />
                            </>
                        )}
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
