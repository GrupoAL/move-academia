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
      "::-webkit-scrollbar": {
        width: "8px", // Largura da barra
        borderRadius: "100%", // Deixa o polegar arredondado
      },
      "::-webkit-scrollbar-track": {
        background: "#fff", // Fundo da trilha
        borderRadius: "100%", // Deixa o polegar arredondado
        position: "relative",
      },
      "::-webkit-scrollbar-thumb": {
        zIndex: 1,
        minHeight: "50px",
        minWidth: "50px",
        maxHeight: "50px",
        maxWidth: "50px",
        position: "fixed",
        background: " #c8df00", // Cor do polegar
        borderRadius: "100%", // Deixa o polegar arredondado
        border: "2px solid transparent", // Espaçamento interno
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "linear-gradient(to bottom, #fff, #d6d6d6)", // Cor ao passar o mouse
      },
      "::-webkit-scrollbar-thumb::before": {
        content: '""',
        position: "absolute",
        top: "-5px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "12px",
        height: "12px",
        backgroundColor: "#d4ff00", // Bolinha amarela
        borderRadius: "50%",
        zIndex: "1",
      },
    },
  },
});

export default theme;
