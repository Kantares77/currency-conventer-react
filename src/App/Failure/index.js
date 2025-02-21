import { LoadingText, StyledGif } from "./styled";
import loadingGif from "./errorGif.gif";
import React from "react";

export const Failure = () => {

    return (
        <div>
            <>
                <LoadingText>
                    Oops...<br />Something went wrong...Please check your internet connection
                </LoadingText>
                <StyledGif src={loadingGif} alt="alternative text" />
            </>
        </div>
    )
};