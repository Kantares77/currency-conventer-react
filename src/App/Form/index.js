import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

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
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p>Required field is marked *</p>
                <legend className="form__legend">Currency converter</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Enter amount in PLN*:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
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
                        <span className="form__labelText">
                            Select currency:
                        </span>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            className="form__field"
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
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Calculate</button>
            </p>
            <Result result={result} />
        </form>
    );
};