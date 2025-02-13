import { useState } from "react";
import { Result } from "./Result";
import React from "react";
import { Field, Fieldset, LabelText, Legend, StyledButton, Info, Loading, Failure, StyledResult } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            calculatedAmount: amount * rate,
            currency,
        });
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <p>Required field is marked *</p>
                <Legend>Currency converter</Legend>
                {ratesData.status === "loading"
                    ? (
                        <Loading>
                            Chwilunia...<br />Właśnie ładuję kursy walut z publicznego API
                        </Loading>
                    )
                    : (
                        ratesData.status === "error" ? (
                            <Failure>
                                Upsss...Coś spowodowało problem. Sprawdź swoje połączenie z internetem
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <LabelText>
                                            Amount in PLN*:
                                        </LabelText>
                                        <Field
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
                                        <LabelText>
                                            Select currency:
                                        </LabelText>
                                        <Field
                                            as="select"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                            required
                                            name="selectedCurrency"
                                        >
                                            {Object.keys(ratesData.rates.data).map(((rates) => (
                                                <option
                                                    key={rates}
                                                    value={rates}
                                                >
                                                    {rates}
                                                </option>
                                            )))}
                                        </Field>
                                    </label>
                                </p>
                            </>
                        )
                    )
                }

            </Fieldset>
            <StyledResult>
                <StyledButton>Calculate</StyledButton>
                <Info>
                    Kursy pochodzą z CurrencyAPI z aktualizacją na dzień: <strong>{ratesData.date}</strong>
                </Info>
                <Result result={result} />
            </StyledResult>
        </form>
    );
};

