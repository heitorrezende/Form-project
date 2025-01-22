import React from 'react';
import { TextField } from '@mui/material';
import { ITextFieldComponentProps } from '../types';

const TextFieldComponent: React.FC<ITextFieldComponentProps> = ({ field, label, type, error, helperText }) => (
    <TextField
        {...field}
        label={label}
        type={type}
        variant="outlined"
        margin="normal"
        fullWidth
        error={error}
        helperText={helperText}
    />
);

export default TextFieldComponent;
