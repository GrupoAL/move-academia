import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MenuComponent } from "../menu";

export const HeaderComponent = ({ type }) => {
  const navigate = useNavigate();
  const params = useParams();

  const backParams = () => {
    const keys = Object.keys(params);
    console.log({ keys });
    if (keys.length > 0) {
      const lastKey = keys[keys.length - 1]; // Última chave
      const updatedParams = { ...params }; // Cria uma cópia dos parâmetros
      delete updatedParams[lastKey]; // Remove a última chave

      // Reconstrói a URL sem o último parâmetro
      const newUrl = Object.entries(updatedParams)
        .map(([key, value]) => `${key}/${value}`)
        .join("/");

      navigate(`/${newUrl}`); // Navega para a nova URL
    }
  };
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
            <MdOutlineDoubleArrow
              onClick={(e) => {
                e.preventDefault();
                backParams();
              }}
            />
          </Box>
          <Flex gap={4} alignItems={"center"}>
            <MenuComponent />
            <IoExitOutline onClick={() => navigate("/")} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

HeaderComponent.propTypes = {
  type: PropTypes.string,
};
