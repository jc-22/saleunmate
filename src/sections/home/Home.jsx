import { useState, useEffect, useRef } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShuffleTwoToneIcon from '@mui/icons-material/ShuffleTwoTone'; import "./Home.css";
import LogoMate from "../logomate/LogoMate";
import { PHRASES } from "../../libs/phrases.js"
import AboutMe from "../aboutme/AboutMe.jsx";
import Guarda from "../Guarda/Guarda.jsx";

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#294624",
  borderRadius: "5px"
};

function Home() {
  const [phrase, setPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phraseIndexRef = useRef(phraseIndex);

  useEffect(() => {
    phraseIndexRef.current = phraseIndex;
  }, [phraseIndex]);

  const getRandomPhrase = () => {
    if (PHRASES.length === 0) {
      return null;
    }
    const randomI = Math.floor(Math.random() * PHRASES.length);
    setPhraseIndex(randomI);
    return PHRASES[randomI];
  };

  const getContinuousPhrase = (state) => {
    if (state === "next") {
      const indexedPhrase = phraseIndexRef.current + 1 >= PHRASES.length ? 0 : phraseIndexRef.current + 1;
      setPhraseIndex(indexedPhrase)
      return PHRASES[indexedPhrase];
    }
    if (state === "back") {
      const indexedPhrase = phraseIndexRef.current - 1 < 0 ? PHRASES.length - 1 : phraseIndexRef.current - 1;
      setPhraseIndex(indexedPhrase)
      return PHRASES[indexedPhrase];
    }
  }

  function handleKeyPress(event) {
    if ([13, 32].includes(event?.keyCode)) {
      setPhrase(getRandomPhrase());
    }
    if ([38, 39].includes(event?.keyCode)) {
      setPhrase(getContinuousPhrase("next"));
    }
    if ([37, 40].includes(event?.keyCode)) {
      setPhrase(getContinuousPhrase("back"));
    }
  }

  useEffect(() => {
    setPhrase(getRandomPhrase());
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <Guarda />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="3rem"
        padding="2rem"
      >
        <LogoMate />
        <Box
          height="250px"
          display="flex"
          flexDirection="column"
        >
          <h1>{phrase}</h1>
        </Box>
        <Box gap={0.5} display="flex">
          <IconButton
            style={buttonStyle}
            onClick={() => {
              setPhrase(getContinuousPhrase("back"));
            }}
          >
            <ArrowRightAltIcon style={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <Button
            style={buttonStyle}
            startIcon={<ShuffleTwoToneIcon />}
            onClick={() => {
              setPhrase(getRandomPhrase());
            }}
          >
            random
          </Button>
          <IconButton
            style={buttonStyle}
            onClick={() => {
              setPhrase(getContinuousPhrase("next"));
            }}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
        <AboutMe />
      </Box>
    </>
  );
}

export default Home;