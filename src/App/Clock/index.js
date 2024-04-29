import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";
import React from "react";

export const Clock = () => {
    const date = useCurrentDate();

    const dateFormat = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
        <StyledClock>
            Dzisiaj jest:
            {" "}
            {dateFormat(date)}
        </StyledClock>
    );
};