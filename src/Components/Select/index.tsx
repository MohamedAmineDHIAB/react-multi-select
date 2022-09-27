/*
©️ Mohamed Amine DHIAB || last updated on 2022-09-27 03:38:54
Component file for the Select component, it is possible to select only one item from the list of options, this component can be reused in other projects.
*/
import {
    Container,
    ValueItem,
    ClearButton,
    Divider,
    Caret,
    Options,
    Option,
} from "./style";
import { useState } from "react";
type SelectOption = {
    label: string;
    value: any;
};
type SelectProps = {
    options: SelectOption[];
    value?: SelectOption; // optional field
    onChange: (value: SelectOption | undefined) => void; // optional field
    width?: string; // optional field
    height?: string; // optional field
};

export default function Select({
    value,
    onChange,
    options,
    width,
    height,
}: SelectProps) {
    const [show, setShow] = useState(false);
    const ClearOptions = () => {
        onChange(undefined);
    };
    return (
        <Container
            tabIndex={0}
            width={width ? width : "100%"}
            height={height ? height : "100"}
            onClick={() => setShow((prev) => !prev)}
            onBlur={() => setShow(false)}
        >
            <ValueItem>{value?.label}</ValueItem>
            <ClearButton
                onClick={(event) => {
                    event.stopPropagation();
                    ClearOptions();
                }}
            >
                {" "}
                &times;
            </ClearButton>
            <Divider></Divider>
            <Caret></Caret>
            <Options show={show}>
                {options.map((option) => (
                    <Option
                        key={option.label}
                        onClick={() => onChange(option)}
                        selected={value?.label == option.label}
                    >
                        {option.label}
                    </Option>
                ))}
            </Options>
        </Container>
    );
}
