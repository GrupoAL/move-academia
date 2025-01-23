import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = ({ type }) => {
  const navigate = useNavigate();
  return (
    <Flex
      as={"header"}
      w={"full"}
      bg="primary.green"
      color={"primary.white"}
      height={"80px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize={"2xl"}
      px={5}
    >
      {type === "logged" && (
        <>
          <Box transform={"scaleX(-1)"}>
            <MdOutlineDoubleArrow />
          </Box>
          <Flex gap={4}>
            <Box>
              <GiHamburgerMenu />
            </Box>
            <Box>
              <IoExitOutline onClick={() => navigate("/")} />
            </Box>
          </Flex>
        </>
      )}
    </Flex>
  );
};

HeaderComponent.propTypes = {
  type: PropTypes.string,
};
