import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { server } from '../server/index';
import TextFieldComponent from './components/TextFieldComponent';
import TextAreaComponent from './components/TextAreaComponent';
import MultiSelectComponent from './components/MultiSelectComponent';
import { CompanyFormProps, FormField } from './types';

const DynamicForm: React.FC<CompanyFormProps> = ({ company }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {server[company].FormFields.map((field: FormField, index: number) => (
                <Controller
                    key={index}
                    name={field.Label}
                    control={control}
                    rules={{
                        required: field.Validation?.required,
                        pattern: field.Validation?.pattern ? new RegExp(field.Validation.pattern) : undefined,
                    }}
                    render={({ field: controllerField }) => {
                        switch (field.Type) {
                            case 'text':
                            case 'email':
                            case 'number':
                                return <TextFieldComponent field={controllerField} label={field.Label} type={field.Type} />;
                            case 'textarea':
                                return <TextAreaComponent field={controllerField} label={field.Label} />;
                            case 'multiselect':
                                return <MultiSelectComponent field={controllerField} label={field.Label} options={field.Options || []} />;
                            default:
                                return <></>;
                        }
                    }}
                />
            ))}
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default DynamicForm;
