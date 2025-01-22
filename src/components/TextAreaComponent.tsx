import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TextAreaComponentProps {
    field: ControllerRenderProps;
    label: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ field, label }) => (
    <TextField
        {...field}
        label={label}
        multiline
        rows={4}
        variant="outlined"
        margin="normal"
        fullWidth
    />
);

export default TextAreaComponent;
