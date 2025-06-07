import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { listItems } from "../../Utils";
import { MenuSandwich } from "../menu/menuSandwich";
import { MenuSearch } from "../menu/menuSearch";
import { useLogout } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const { data } = useAppContext();
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };

  const backParams = () => {
    const path = location.pathname.split("/");
    path.pop();

    navigate(`${path.join("/")}`);
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
      {data.token && (
        <>
          <Flex
            w={"full"}
            display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            py={"1rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
              <MenuSandwich />
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
              md: "4rem",
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
                    _hover={{ color: "primary.yellow", cursor: "pointer" }}
                    transition={".5s"}
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
              onClick={() => handleLogout()}
              display={"flex"}
              alignItems={"center"}
              gap={3}
              _hover={{ color: "primary.yellow", cursor: "pointer" }}
            >
              <IoExitOutline fontSize={"32px"} /> Sair
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};
