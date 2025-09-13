import { Fade, Flex } from "@chakra-ui/react";
import { MenuSearch } from "../menu/menuSearch";

export const FooterComponent = () => {
  return (
    <Fade
      in
      transition={{
        enter: { duration: 2.5 },
        exit: { duration: 0.5 },
      }}
    >
      <Flex
        display={{
          base: "flex",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        bottom={0}
        alignSelf={"end"}
        as={"footer"}
        w={"full"}
        bg="primary.green"
        color={"primary.white"}
        height={"80px"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"2xl"}
        px={5}
      >
        <Flex
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
        >
          <MenuSearch />
        </Flex>
      </Flex>
    </Fade>
  );
};
