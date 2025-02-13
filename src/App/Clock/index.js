import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";
import React from "react";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest:
            {" "}
            {formatDate(date)}
        </StyledClock>
    );
};