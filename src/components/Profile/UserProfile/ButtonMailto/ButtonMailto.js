import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <a
            href="#"
            target="_blank"
            onClick={(e) => {
                window.location = mailto;
                // window.open(window.location);

                e.preventDefault();
            }}
        >
            {label}
        </a>
    );
};

export default ButtonMailto;
