import { ViewResult } from "./styled";
import React from "react";

export const Result = ({ result }) => (
    <ViewResult>
        {!!result && (
            <>
                {result.enteredAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </ViewResult>
);