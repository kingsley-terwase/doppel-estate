import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Message = () => {
    const theme = useTheme();
    return (
        <>
             <Box>
                <Typography variant="body1" color={theme.palette.text.primary}>
                    {" "}
                    This is the message page
                </Typography>
            </Box>
        </>
    );
};

export default Message;
