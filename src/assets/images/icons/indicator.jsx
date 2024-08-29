import * as React from "react";
const IndicatorIcon = (props) => (
    <svg
        width={10}
        height={6}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            opacity={0.8}
            d="M9 5L5 1L1 5"
            stroke="#262626"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default IndicatorIcon;
