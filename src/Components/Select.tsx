type SelectOption = {
    label: string;
    value: string;
};
type SelectProps = {
    options: SelectOption[];
    value?: SelectOption; // optional field
    onChange: (value: SelectOption | undefined) => void; // optional field
};

export function Select({ value, onChange, options }: SelectProps) {}
