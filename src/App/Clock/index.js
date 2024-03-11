import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const dateFormat = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    const timeFormat = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    return (
        <p className="clock">
            Dzisiaj jest {date.toLocaleString(undefined, dateFormat)}, {date.toLocaleString(undefined, timeFormat)}
        </p>
    );
};