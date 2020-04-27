import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const Form: React.FC = () => {
    return (
        <div>
            <TextField label="New Task" />
            <IconButton color="primary" size="medium">
                <AddIcon />
            </IconButton>
        </div>
    );
};
