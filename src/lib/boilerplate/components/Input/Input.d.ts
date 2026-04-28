export enum InputType {
  DATE = 'date',
  EMAIL = 'email',
  FILE = 'file',
  NUMBER = 'number',
  TEL = 'tel',
  TEXT = 'text'
}

export type InputProps = ComponentBaseProps & {
  label?: string;
  max?: string | number;
  min?: string | number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  type?: InputType | 'date' | 'email' | 'file' | 'number' | 'tel' | 'text';
  value?: string;
  error?: string;
  multiple?: boolean;
};
