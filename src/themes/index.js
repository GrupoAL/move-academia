import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      green: "#00452f",
      bg: "#000",
      white: "#fff",
      yellow: "#c9e000",
      cardBg: "#c8df00",
    },
  },
  fontSizes: {
    "2xl": "32px",
    xl: "28px",
    lg: "24px",
    md: "18px",
    sm: "16px",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Work Sans, sans-serif",
        fontStyle: "italic",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});

export default theme;
