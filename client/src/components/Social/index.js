import React from "react";
import { IconButton, Stack } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter, Apple, Email } from "@material-ui/icons";

const Social = () => {

    return (
        <Stack direction="row" spacing={0}>
        <IconButton><Facebook style={{color: 'black' }}/></IconButton>       
        <IconButton><Instagram style={{color: 'black'}}/></IconButton>
        <IconButton><YouTube style={{color: 'black'}}/></IconButton>
        <IconButton><Twitter style={{color: 'black'}}/></IconButton>
        <IconButton><Apple style={{color: 'black'}}/></IconButton>
        <IconButton><Email style={{color: 'black'}}/></IconButton>
        </Stack>
    );
};

export default Social;