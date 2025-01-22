export interface MultiSelectComponentProps {
  field: ControllerRenderProps;
  label: string;
  options: string[];
}

export interface TextAreaComponentProps {
  field: ControllerRenderProps;
  label: string;
}

export interface TextFieldComponentProps {
  field: ControllerRenderProps;
  label: string;
  type: string;
}

export interface FormField {
  Label: string;
  Type: string;
  Validation?: {
    required?: boolean;
    pattern?: string;
  };
  Options?: string[];
}

export interface Server {
  [key: string]: {
    FormFields: FormField[];
  };
}

export interface CompanyFormProps {
  company: keyof Server;
}
