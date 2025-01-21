import { Button, Flex } from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";
import { TfiSearch } from "react-icons/tfi";

export const FooterComponent = () => {
  return (
    <Flex
      position={"fixed"}
      bottom={0}
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
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={"full"}
      >
        <Button
          bg={"none"}
          _hover={{ bg: "none" }}
          color="primary.white"
          fontSize={"56px"}
          fontWeight={{ base: 600, sm: 600, md: 700, lg: 700 }}
          transform={"rotate(-45deg) scaleX(-1)"}
        >
          <GrRefresh />
        </Button>
        <Button
          bg={"primary.white"}
          color="primary.yellow"
          border={"2px solid"}
          borderColor={"primary.yellow"}
          borderRadius={"100%"}
          fontSize={"40px"}
          p={0}
          w={"60px"}
          h={"60px"}
          transform={"scaleX(-1)"}
        >
          <TfiSearch />
        </Button>
        <Flex w={"60px"} h={"60px"}></Flex>
      </Flex>
    </Flex>
  );
};
