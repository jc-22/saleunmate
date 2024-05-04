import { Box, IconButton, useMediaQuery } from "@mui/material";
import NavBar from "../navbar/NavBar";
import { LinkedIn, Instagram, X, GitHub } from '@mui/icons-material';
import "./AboutMe.css";
import LogoMate from "../logomate/LogoMate";

function AboutMe() {
    const isLargeScreen = useMediaQuery('(min-width:600px)');
    return (
        <>
            <NavBar />
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap="3rem"
                pt="2rem"
            >
                <LogoMate/>
                <Box display="flex" justifyContent="space-around" sx={{
                    '@media screen and (max-width:600px)': {
                        flexDirection: isLargeScreen ? 'row' : 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    },
                }}>
                    <Box width="300px" alignContent="center">
                        <img className="perfil" src={import.meta.env.VITE_GET_FOTO_MIA} alt="Juan Cruz Lima"/>
                    </Box>
                    <Box width="300px" alignContent="center" textAlign="start">
                        Buenas!, qué tal? Me presento, soy Juan Cruz Lima, un Full Stack Developer con más de 3 años de experiencia en este rubro, con conocimientos en PHP, SQL, JavaScript, React, Node, Git y Metodologías Ágiles, gracias por visitar mi sitio web!
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Box display="flex" gap={2}>
                        <IconButton aria-label="linkedin" size="large" sx={{color:"white"}} href="https://www.linkedin.com/in/limajuancruz/in" target="_blank">
                            <LinkedIn/>
                        </IconButton>
                        <IconButton aria-label="github" size="large" sx={{color:"white"}} href="https://github.com/jc-22" target="_blank">
                            <GitHub/>
                        </IconButton>
                        <IconButton aria-label="instagram" size="large" sx={{color:"white"}} href="https://www.instagram.com/juan_c_22/" target="_blank">
                            <Instagram/>
                        </IconButton>
                        <IconButton aria-label="x" size="large" sx={{color:"white"}} href="https://x.com/juanc__22" target="_blank">
                            <X/>
                        </IconButton>
                    </Box>
                    <a href='https://cafecito.app/juanc22' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a>
                </Box>
            </Box>
        </>
    );
}

export default AboutMe;
