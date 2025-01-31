import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { listItems } from "../../Utils";
import { MenuComponent } from "../menu/menuSandwich";
import { MenuSearch } from "../menu/menuSearch";

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
  const location = useLocation();
  const { setSelectedOption } = useSelectedOption();

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
          <Flex
            display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
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
            </Flex>
          </Flex>
          <Flex
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            w={"full"}
            px={{
              md: 6,
              lg: "4rem",
              xl: "5rem",
            }}
            py={6}
            gap={6}
            justifyContent={"end"}
            alignItems={"center"}
          >
            {location.pathname !== "/dashboard" && (
              <List
                display={"flex"}
                justifyContent={"center"}
                w={"full"}
                gap={9}
              >
                {listItems.map((item, i) => (
                  <ListItem
                    fontSize={{
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                    }}
                    fontWeight={"bold"}
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedOption(item);
                      navigate(`/dashboard/${item.categoria}`);
                    }}
                  >
                    {item.categoria}
                  </ListItem>
                ))}
              </List>
            )}
            <MenuSearch />
            <Text
              cursor={"pointer"}
              color={"primary.white"}
              fontSize={{
                md: "md",
                lg: "lg",
                xl: "lg",
              }}
              fontWeight={700}
              fontStyle={"italic"}
              onClick={() => navigate("/")}
              display={"flex"}
              alignItems={"center"}
              gap={3}
              _hover={{ color: "primary.green" }}
            >
              <IoExitOutline fontSize={"32px"} /> Sair
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};

HeaderComponent.propTypes = {
  type: PropTypes.string,
};
