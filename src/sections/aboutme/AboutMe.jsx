// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, IconButton } from "@mui/material";
import { LinkedIn, Instagram, X, GitHub, Mail } from '@mui/icons-material';

const iconStyle = {
    color: "white",
};

function AboutMe() {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <Box display="flex" gap={0.5}>
                <IconButton id="linkedinIconButton" aria-label="linkedin" size="medium" sx={iconStyle} href="https://www.linkedin.com/in/limajuancruz/in" target="_blank">
                    <LinkedIn id="linkedinIcon" />
                </IconButton>
                <IconButton id="githubIconButton" aria-label="github" size="medium" sx={iconStyle} href="https://github.com/jc-22" target="_blank">
                    <GitHub id="githubIcon" />
                </IconButton>
                <IconButton id="instagramIconButton" aria-label="instagram" size="medium" sx={iconStyle} href="https://www.instagram.com/juan_c_22/" target="_blank">
                    <Instagram id="instagramIcon" />
                </IconButton>
                <IconButton id="xIconButton" aria-label="x" size="medium" sx={iconStyle} href="https://x.com/juanc__22" target="_blank">
                    <X id="xIcon" />
                </IconButton>
                <IconButton id="mailIconButton" aria-label="mail" size="medium" sx={iconStyle} href="mailto:limajuancruz.22@gmail.com">
                    <Mail id="mailIcon" />
                </IconButton>
            </Box>
            <a id="cafecitoIconButton" href='https://cafecito.app/juanc22' rel='noopener' target='_blank'><img srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a>
        </Box>
    );
}

export default AboutMe;