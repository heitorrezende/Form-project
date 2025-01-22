import React from 'react';
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { IMultiSelectComponentProps } from '../types';

const MultiSelectComponent: React.FC<IMultiSelectComponentProps> = ({ field, label, options, error, helperText }) => (
    <FormControl variant="outlined" margin="normal" fullWidth error={error}>
        <InputLabel>{label}</InputLabel>
        <Select
            {...field}
            label={label}
            multiple
            value={field.value || []}
            onChange={(e) => field.onChange(e.target.value)}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
);

export default MultiSelectComponent;
