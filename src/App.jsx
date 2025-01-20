import { Flex } from "@chakra-ui/react";
import { HeaderComponent } from "./components/header";
import { DashboardPage } from "./pages/dashboard";

function App() {
  return (
    <Flex
      direction={"column"}
      bg="primary.bg"
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
        <DashboardPage />
      </Flex>
    </Flex>
  );
}

export default App;
