import { LoadingText, StyledGif } from "./styled";
import loadingGif from "./loadingGif.gif";
import React from "react";

export const Loading = () => {

    return (
        <div>
            <>
                <LoadingText>
                    Wait a minute...<br />There are just loading currency rates from public API
                </LoadingText>
                <StyledGif src={loadingGif} alt="alternative text" />
            </>
        </div>
    );
};