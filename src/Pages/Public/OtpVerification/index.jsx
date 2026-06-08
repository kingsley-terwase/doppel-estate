import OtpImageSection  from "./OtpImageSection"
import  OtpSection  from "./OtpSection"
import { Box, Grid} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const OtpForm = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Grid container sx={{ height: "100%" }}>
                <OtpImageSection />
                <OtpSection />
            </Grid>
        </Box>
    );
};

export default OtpForm;