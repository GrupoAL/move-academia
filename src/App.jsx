import { Flex } from "@chakra-ui/react";
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header";
import { VideoPlayerPage } from "./pages/videoPlayer";

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
        <VideoPlayerPage />
      </Flex>
      <FooterComponent />
    </Flex>
  );
}

export default App;
