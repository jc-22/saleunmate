import { useState, useEffect, Suspense } from "react";
import { fetchData } from "../../fetch/fetchData";
import { Box, Button, CircularProgress } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import NavBar from "../navbar/NavBar";
import "./Home.css";
import LogoMate from "../logomate/LogoMate";

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#294624",
  width: "200px",
};

const apiData = fetchData(
  import.meta.env.VITE_GET_FRASES_ENDPOINT
);

const getFraseRandom = (frases) => {
  if (frases.length === 0) {
    return null;
  }
  const randomI = Math.floor(Math.random() * frases.length);
  return frases[randomI];
};

function Home() {
  const [frase, setFrase] = useState({});
  const data = apiData.read();

  function handleKeyPress(event) {
    if (event.code === "Space") {
      setFrase(getFraseRandom(data?.frases));
    }
  }

  useEffect(() => {
    setFrase(getFraseRandom(data?.frases));
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="3rem"
        padding="2rem"
      >
        <LogoMate/>
        <Box 
          height="300px"
          display="flex"
          flexDirection="column"
        >
          <Suspense fallback={<CircularProgress />}>
            <h1>{frase.frase}</h1>
            <p>Autor(?: {frase.autor}</p>
          </Suspense>
        </Box>
        <Button
          style={buttonStyle}
          startIcon={<ReplayIcon />}
          onClick={() => {
            setFrase(getFraseRandom(data?.frases));
          }}
        >
          otra frase?
        </Button>
      </Box>
    </>
  );
}

export default Home;
