
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface MultiSelectComponentProps {
    field: ControllerRenderProps;
    label: string;
    options: string[];
}


const MultiSelectComponent: React.FC<MultiSelectComponentProps> = ({ field, label, options }) => (
    <TextField
        {...field}
        label={label}
        select
        SelectProps={{
            multiple: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        value={field.value || []}
        onChange={(e) => field.onChange(e.target.value)}
    >
        {options.map((option, idx) => (
            <option key={idx} value={option}>
                {option}
            </option>
        ))}
    </TextField>
);

export default MultiSelectComponent;
