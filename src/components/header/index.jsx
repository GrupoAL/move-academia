import { Flex } from "@chakra-ui/react";
import theme from "../../themes";

export const HeaderComponent = ({ children }) => {
  return (
    <Flex w={"full"} bg={theme.colors.green} height={"100px"}>
      {children}
    </Flex>
  );
};
