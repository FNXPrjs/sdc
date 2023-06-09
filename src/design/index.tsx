import { createTheme, responsiveFontSizes } from "@mui/material";


// Colors
// Light theme
const PrimaryPurpleBlue = "#4318FF";
const PrimaryPurpleBlueLight = "#6F5BFF";
const SecondaryGray = "#F4F7FE";
const PrimaryTextColor = "rgba(0, 0, 0, 0.87)";
const SecondaryTextColor = "rgb(163, 174, 208)";
const DisabledTextColor = "rgba(0, 0, 0, 0.38)";
// Dark theme
const PrimaryPurple = "#475BE8";
const PrimaryPurpleLight = "#8E9BF1";


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
            main: PrimaryPurple,
            light: PrimaryPurpleLight,
            // dark: 
            contrastText: "#EFEFEF",
        },
        secondary: {
            main: SecondaryGray,
        },
        text: {
            primary: "#EFEFEF",
            secondary: "#6F767E",
            disabled: "#6F767E",
        },
        background: {
            paper: "#1A1D1F",
            default: "#111315",
        }
    },
}));
