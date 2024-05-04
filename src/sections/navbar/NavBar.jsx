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
                        <Button variant="outlined" style={buttonStyle}>
                            <Link to="/this" style={linkButtonStyle} >Sobre este sitio</Link>
                        </Button>
                    </div>
                )}
                {pathname !== '/' && (
                    <div>
                        <Button variant="outlined" style={buttonStyle}>
                            <Link to="/" style={linkButtonStyle} >Home</Link>
                        </Button>
                    </div>
                )}
                {pathname !== '/me' && (
                    <div>
                        <Button variant="outlined" style={buttonStyle}>
                            <Link to="/me" style={linkButtonStyle} >Sobre mí</Link>
                        </Button>
                    </div>
                )}
            </Box>
            <div className="guarda">
            </div>
        </Box>
    )
}

export default NavBar;