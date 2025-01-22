import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TextFieldComponentProps {
    field: ControllerRenderProps;
    label: string;
    type: string;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({ field, label, type }) => (
    <TextField
        {...field}
        label={label}
        type={type}
        variant="outlined"
        margin="normal"
        fullWidth
    />
);

export default TextFieldComponent;
