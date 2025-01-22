import { ControllerRenderProps } from "react-hook-form";

export interface IMultiSelectComponentProps {
  field: ControllerRenderProps;
  label: string;
  options: string[];
  error?: boolean;
  helperText?: string;
}

export interface ITextAreaComponentProps {
  field: ControllerRenderProps;
  label: string;
  error?: boolean;
  helperText?: string;
}

export interface ITextFieldComponentProps {
  field: ControllerRenderProps;
  label: string;
  type: string;
  error?: boolean;
  helperText?: string;
}

export interface IFormField {
  Label: string;
  Type: string;
  Validation?: {
    required?: boolean;
    pattern?: string;
  };
  Options?: string[];
}

export interface IServer {
  [key: string]: {
    FormFields: IFormField[];
  };
}

export interface ICompanyFormProps {
  company: keyof IServer;
}

export interface ICompanySelectionProps {
  selectedCompany: string;
  onSelectCompany: (company: string) => void;
}
