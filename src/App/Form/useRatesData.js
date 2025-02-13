import { useEffect, useState } from "react";
import { fetchApiData } from "./fetchApiData";
import { source } from "./source";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });


    useEffect(() => {
        const fetchRates = async () => {
            try {
                const currency = await fetchApiData(source);

                const data = await fetchApiData(source);

                const unformatedDate = data.meta.last_updated_at;
                const formatedDate = new Date(unformatedDate).toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });

                setRatesData({
                    status: "success",
                    rates: currency,
                    date: formatedDate,
                });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 2000);
    }, []);

    return ratesData;
};