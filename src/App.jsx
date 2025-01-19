import { Flex } from "@chakra-ui/react";
import { HeaderComponent } from "./components/header";
import { RecoverPasswordPage } from "./pages/recoverPassword";
import theme from "./themes";

function App() {
  return (
    <Flex
      direction={"column"}
      bg={theme.colors.bg}
      width={"100dvw"}
      height={"100dvh"}
      alignItems={"center"}
    >
      <HeaderComponent />
      <Flex
        minW={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <RecoverPasswordPage />
      </Flex>
    </Flex>
  );
}

export default App;
