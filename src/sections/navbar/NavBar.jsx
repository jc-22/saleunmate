import { Box, Button, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./NavBar.css";

const buttonStyle = {
    color: '#fff',
    borderColor: '#fff',
    width: '170px',
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
                        <Button variant="outlined" href="/this" style={buttonStyle}>
                            Sobre este sitio
                        </Button>
                    </div>
                )}
                {pathname !== '/' && (
                    <div>
                        <Button variant="outlined" href="/" style={buttonStyle}>
                            Home
                        </Button>
                    </div>
                )}
                {pathname !== '/me' && (
                    <div>
                        <Button variant="outlined" href="/me" style={buttonStyle}>
                            Sobre mi
                        </Button>
                    </div>
                )}
            </Box>
            <div className="guarda">

            </div>
            {/* <img src="src/public/images/guarda.jpg" /> */}
        </Box>
    )
}

export default NavBar;