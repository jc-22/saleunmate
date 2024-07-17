import "./LogoMate.css";
import mateImage from "@/public/images/mate_sinfondo.png";

function LogoMate() {
    return (
        <img
            src={mateImage}
            className="logo"
            alt="Mate logo"
        />
    )
}

export default LogoMate;