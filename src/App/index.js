import { Form } from "./Form";
import { Clock } from "./Clock";
import React from "react";
import { Wrapper } from "./styled";

function App() {
    return (
        <Wrapper>
            <Clock />
            <Form />
        </Wrapper>
    );
}

export default App;