import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { server } from "../server/index";
import TextFieldComponent from "./components/TextFieldComponent";
import TextAreaComponent from "./components/TextAreaComponent";
import MultiSelectComponent from "./components/MultiSelectComponent";
import { ICompanyFormProps, IFormField } from "./types";

const DynamicForm: React.FC<ICompanyFormProps> = ({ company }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom color="primary">
                {company}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {server[company].FormFields.map((field: IFormField) => (
                    <Controller
                        key={field.Label}
                        name={field.Label}
                        control={control}
                        rules={{
                            required: field.Validation?.required
                                ? "This field is required"
                                : false,
                            pattern: field.Validation?.pattern
                                ? {
                                    value: new RegExp(field.Validation.pattern),
                                    message: "Invalid format",
                                }
                                : undefined,
                        }}
                        render={({ field: controllerField }) => {
                            const error = errors[field.Label];
                            const helperText =
                                typeof error?.message === "string" ? error.message : undefined;

                            switch (field.Type) {
                                case "text":
                                case "email":
                                case "number":
                                    return (
                                        <TextFieldComponent
                                            field={controllerField}
                                            label={field.Label}
                                            type={field.Type}
                                            error={!!error}
                                            helperText={helperText}
                                        />
                                    );
                                case "textarea":
                                    return (
                                        <TextAreaComponent
                                            field={controllerField}
                                            label={field.Label}
                                            error={!!error}
                                            helperText={helperText}
                                        />
                                    );
                                case "multiselect":
                                    return (
                                        <MultiSelectComponent
                                            field={controllerField}
                                            label={field.Label}
                                            options={field.Options || []}
                                            error={!!error}
                                            helperText={helperText}
                                        />
                                    );
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
        </>
    );
};

export default DynamicForm;
