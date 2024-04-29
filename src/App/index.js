import { Form } from "./Form";
import { Clock } from "./Clock";
import React from "react";
import { Container } from "./styled";

function App() {
    return (
        <Container>
            <Clock />
            <Form />
        </Container>
    );
}

export default App;