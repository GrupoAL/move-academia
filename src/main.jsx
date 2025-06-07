import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/index.jsx";
import { SelectedOptionProvider } from "./contexts/selectedOptions.jsx";
import theme from "./themes/index.js";
import { AppProvider } from "./contexts/index.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ChakraProvider theme={theme}>
          <SelectedOptionProvider>
            <App />
          </SelectedOptionProvider>
        </ChakraProvider>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
