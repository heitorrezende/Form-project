import React from 'react';
import { TextField } from '@mui/material';
import { ITextAreaComponentProps } from '../types';

const TextAreaComponent: React.FC<ITextAreaComponentProps> = ({ field, label, error, helperText }) => (
    <TextField
        {...field}
        label={label}
        multiline
        rows={4}
        variant="outlined"
        margin="normal"
        fullWidth
        error={error}
        helperText={helperText}
    />
);

export default TextAreaComponent;
