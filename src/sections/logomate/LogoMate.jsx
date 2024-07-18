// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LogoMate.css";
import mateImage from "@/public/images/mate_sinfondo.png";

function LogoMate() {
    return (
        <img
            id="logoMateImg"
            src={mateImage}
            className="logo"
            alt="Mate logo"
        />
    )
}

export default LogoMate;