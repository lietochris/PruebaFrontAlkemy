import {Global} from "@emotion/react";

export default function Fonts() {
    return (
        <Global
            styles={`

        @font-face {
  font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
  src: url("../public/fonts/Gilroy/Gilroy-Light.woff2") format("woff2");
}
        
        
        `}

        />
    )
}