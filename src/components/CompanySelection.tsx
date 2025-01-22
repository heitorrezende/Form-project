import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ICompanySelectionProps } from '../types';

const CompanySelection: React.FC<ICompanySelectionProps> = ({ selectedCompany, onSelectCompany }) => {
    const handleChange = (event: SelectChangeEvent) => {
        onSelectCompany(event.target.value);
    };

    return (
        <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel>Select Company</InputLabel>
            <Select value={selectedCompany} onChange={handleChange} label="Select Company">
                <MenuItem value="Company1">Company 1</MenuItem>
                <MenuItem value="Company2">Company 2</MenuItem>
                <MenuItem value="Company3">Company 3</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CompanySelection;
