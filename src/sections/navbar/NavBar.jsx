import { Box, Button, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const buttonStyle = {
    color: '#fff',
    borderColor: '#fff',
    width: '170px',
};

const linkButtonStyle = {
    textDecoration: 'none',
    color: 'inherit',
};

function NavBar() {
    const isLargeScreen = useMediaQuery('(min-width:600px)');
    const { pathname } = useLocation();
    return (
        <Box>
            <Box padding={2} display="flex" justifyContent="space-around" sx={{
                '@media screen and (max-width:600px)': {
                    flexDirection: isLargeScreen ? 'row' : 'column',
                    alignItems: 'center',
                    gap: '1rem'
                },
            }}>
                {pathname !== '/this' && (
                    <div>
                        <Link to="/this" style={linkButtonStyle} >
                            <Button variant="outlined" style={buttonStyle}>
                                Sobre este sitio
                            </Button>
                        </Link>
                    </div>
                )}
                {pathname !== '/' && (
                    <div>
                        <Link to="/" style={linkButtonStyle} >
                            <Button variant="outlined" style={buttonStyle}>
                                Home
                            </Button>
                        </Link>
                    </div>
                )}
                {pathname !== '/me' && (
                    <div>
                        <Link to="/me" style={linkButtonStyle} >
                            <Button variant="outlined" style={buttonStyle}>
                                Sobre mí
                            </Button>
                        </Link>
                    </div>
                )}
            </Box>
            <div className="guarda">
            </div>
        </Box>
    )
}

export default NavBar;