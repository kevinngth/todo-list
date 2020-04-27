import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const List: React.FC = () => {
    return (
        <div>
            <TextField label="New Task" />
            <IconButton color="primary" size="medium">
                <AddIcon />
            </IconButton>
        </div>
    );
};
