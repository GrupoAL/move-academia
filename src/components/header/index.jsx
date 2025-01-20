import { Box, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";

export const HeaderComponent = ({ children }) => {
  return (
    <Flex
      as={"header"}
      w={"full"}
      bg="primary.green"
      color={"primary.white"}
      height={"100px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize={"2xl"}
      px={5}
    >
      <Box transform={"scaleX(-1)"}>
        <MdOutlineDoubleArrow />
      </Box>
      <Flex gap={4}>
        <Box>
          <GiHamburgerMenu />
        </Box>
        <Box>
          <IoExitOutline />
        </Box>
      </Flex>
    </Flex>
  );
};
