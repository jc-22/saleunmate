import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../navbar/NavBar";
import LogoMate from "../logomate/LogoMate";

function AboutThis() {
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
                <Box display="flex" flexDirection="column" justifyContent="space-around" sx={{
                    '@media screen and (max-width:600px)': {
                        flexDirection: isLargeScreen ? 'row' : 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    },
                }}>
                    <h1>¿Por qué y para qué?</h1>
                    <Box display="flex" alignContent="center" textAlign="start" paddingX="4rem">
                        La idea del sitio vino de la rutina de todos los días, que al terminar nuestra Daily, con el equipo de la empresa donde me encuentro trabajando, siempre tirábamos un comentario haciendo referencia a que nos hacíamos un mate, y volvíamos a conectarnos al Discord para seguir con nuestras tareas del día, no es nada más que eso.                    </Box>
                    <h1>Herramientas</h1>
                    <Box display="flex" alignContent="center" textAlign="start" paddingX="4rem">
                        El Back está hecho en Node con el framework Serverless, el mismo está deployado en AWS Lambda, las frases se guardan en AWS DynamoDB, y las imágenes están subidas a AWS S3.                        
                        <br/>
                        El Front está desarrollado con React mediante Vite, utilizando Material UI, y el mismo está deployado en GitHub.
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AboutThis;