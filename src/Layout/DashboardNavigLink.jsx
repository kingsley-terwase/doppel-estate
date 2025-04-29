import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";
import {FONT_FAMILY} from "../Config/font";

const DashboardNavigLink = styled(Link)(({theme, isactive}) => ({
    fontFamily: FONT_FAMILY.primary,
    fontWeight: 300,
    display: "flex",
    fontSize: "15px",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "#A6A1A1",
    padding: "1rem 0",
    ...(isactive == 1 && {
        color: theme.palette.mode === "light" ? "#000" : "#fff",
        backgroundColor: theme.palette.mode === "light" ? "#C5C5C5" : "#0D0D0D",
        borderRadius: "8px",
        mt: "16px",
        padding: "4px 1px",
        "&:hover": {
            color: "#008836",
        },
    }),
}));

export default DashboardNavigLink;
