import React from 'react';
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
    tasks: string[];
    setTasks: (tasks: string[]) => void;
};

export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleClick = (index: number) => () => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <List className={classes.root}>
            {tasks.map((task, index) => {
                return (
                    <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox color="primary" edge="start" checked={checked.indexOf(index) !== -1} />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={handleClick(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};
