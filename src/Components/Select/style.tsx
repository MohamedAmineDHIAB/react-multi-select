import styled from "styled-components";

interface ContainerProps {
    width: string;
    height: string;
}
interface OptionsProps {
    show: boolean;
}
interface OptionProps {
    selected: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: ${(props) => props.width};
    min-height: ${(props) => props.height};
    border: 0.05em solid gray;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.25em;
    outline: none;
    &:focus {
        border-color: hsl(200, 100%, 50%);
    }
`;
export const ValueItem = styled.span`
    flex-grow: 1;
`;
export const ClearButton = styled.button`
    background: none;
    color: gray;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.5em;
    &:focus,
    &:hover {
        color: black;
    }
`;

export const Divider = styled.div`
    background-color: gray;
    align-self: stretch;
    width: 0.1em;
`;
export const Caret = styled.div`
    translate: 0 25%;
    border: 0.25em solid transparent;
    border-top-color: gray;
    font-size: 1.2em;
`;
export const Options = styled.ul<OptionsProps>`
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    display: ${(props) => (props.show ? "block" : "none")};
    max-height: 10em;
    overflow-y: auto;
    border: 0.05em solid gray;
    border-radius: 0.25em;
    width: 100%;
    left: 0;
    top: calc(100% + 0.25em);
    background-color: white;
    z-index: 999;
`;
export const Option = styled.li<OptionProps>`
    padding: 0.75em 0.5em;
    cursor: pointer;
    background-color: ${(props) =>
        props.selected ? "hsl(200,100%,75%)" : "white"};
    &:hover {
        background-color: hsl(200, 100%, 50%);
    }
`;
