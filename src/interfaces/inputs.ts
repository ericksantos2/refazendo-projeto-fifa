export interface input {
  value: string;
  text: string;
}

export interface inputForm {
  type: 'input' | 'select';
  value: string;
  label: string;
  inputs?: input[];
  required?: boolean;
}