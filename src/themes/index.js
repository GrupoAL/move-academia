import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    green: "#00452f",
    bg: "#000",
    white: "#fff",
    yellow: "#c9e000",
    cardBg: "#c8df00",
  },
  fonts: {
    xl: "28px",
    lg: "24px",
    md: "18px",
    sm: "16px",
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});

export default theme;
