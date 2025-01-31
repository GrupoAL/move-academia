import { Button, Flex } from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { MenuSearch } from "../menu/menuSearch";

export const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <Flex
      display={{
        base: "flex",
        sm: "flex",
        md: "none",
        lg: "none",
        xl: "none",
      }}
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
          onClick={() => navigate("/dashboard")}
        >
          <GrRefresh />
        </Button>
        <MenuSearch />

        <Flex w={"60px"} h={"60px"}></Flex>
      </Flex>
    </Flex>
  );
};
