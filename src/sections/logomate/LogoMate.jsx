import "./LogoMate.css";

function LogoMate() {
    return (
        <>
            <img
                src={import.meta.env.VITE_GET_LOGO_MATE}
                className="logo"
                alt="Mate logo"
            />
        </>
    )
}

export default LogoMate;