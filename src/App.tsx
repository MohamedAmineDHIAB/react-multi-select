import Select from "./Components/Select";
import { useState } from "react";
const options = [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 },
    { label: "Four", value: 4 },
];
function App() {
    const [value, setValue] = useState<typeof options[0] | undefined>(
        options[0]
    );
    return (
        <Select
            options={options}
            width="20em"
            height="1.5em"
            value={value}
            onChange={setValue}
        />
    );
}

export default App;
