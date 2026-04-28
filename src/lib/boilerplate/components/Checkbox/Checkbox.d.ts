export type CheckboxProps = ComponentBaseProps & {
  checked?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (checked: boolean) => boolean;
};
