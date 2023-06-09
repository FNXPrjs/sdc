import { createTheme, responsiveFontSizes } from "@mui/material";


// Colors
const PrimaryPurpleBlue = "#4318FF";
const PrimaryPurpleBlueLight = "#6F5BFF";
const SecondaryGray = "#F4F7FE";
const PrimaryTextColor = "rgba(0, 0, 0, 0.87)";
const SecondaryTextColor = "rgb(163, 174, 208)";
const DisabledTextColor = "rgba(0, 0, 0, 0.38)";


export const SDCLightTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: PrimaryPurpleBlue,
            light: PrimaryPurpleBlueLight,
            // dark: 
            contrastText: "#fff",
        },
        secondary: {
            main: SecondaryGray,
        },
        text: {
            primary: PrimaryTextColor,
            secondary: SecondaryTextColor,
            disabled: DisabledTextColor,
        },
        background: {
            default: SecondaryGray,
        }
    },
}));


export const SDCDarkTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#330f49",
        },
        secondary: {
            main: "#45d0c8",
        },
    },
}));
