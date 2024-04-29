import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import React from "react";
import { StyledButton, StyledField, StyledFieldset, StyledForm, StyledLegend, StyledResult, StyledText } from "./styled";

export const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            enteredAmount: +amount,
            calculatedAmount: amount / rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                <p>Required field is marked *</p>
                <StyledLegend>Currency converter</StyledLegend>
                <p>
                    <label>
                        <StyledText>
                            Enter amount in PLN*:
                        </StyledText>
                        <StyledField
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            min="1"
                            step="any"
                            required
                            placeholder="Enter amount"
                            name="enteredAmount"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <StyledText>
                            Select currency:
                        </StyledText>
                        <StyledField as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            required
                            name="selectedCurrency"
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </StyledField>
                    </label>
                </p>
            </StyledFieldset>
            <StyledResult>
                <StyledButton>Calculate</StyledButton>
                <Result result={result} />
            </StyledResult>
        </StyledForm>
    );
};