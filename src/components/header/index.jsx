import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { listItems } from "../../Utils";
import { MenuSandwich } from "../menu/menuSandwich";
import { MenuSearch } from "../menu/menuSearch";
import { useLogout } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const [isDash, setIsDash] = useState();

  const { data, canReturn, setCanReturn } = useAppContext();
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

  useEffect(() => {
    location.pathname === "/dashboard" ? setIsDash(false) : setIsDash(true);
    setCanReturn(true);
  }, [location, setCanReturn]);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const { setSelectedOption, selectedOption } = useSelectedOption();
  const { canAnimate } = useAppContext();

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
      {!canAnimate.run && (
        <>
          {data?.token && (
            <>
              <Flex
                w={{ base: "full", md: "32px" }}
                display={"flex"}
                py={"1rem"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  transform={"scaleX(-1)"}
                  _hover={{ cursor: "pointer", color: "primary.yellow" }}
                >
                  {isDash && canReturn && (
                    <MdOutlineDoubleArrow
                      onClick={(e) => {
                        e.preventDefault();
                        backParams();
                      }}
                    />
                  )}
                </Box>

                {isMobile && (
                  <Flex gap={4} alignItems={"center"}>
                    <MenuSandwich />
                  </Flex>
                )}
              </Flex>
              {!isMobile && (
                <Flex
                  display={"flex"}
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
                  {isDash && (
                    <Menu transition={".3s"}>
                      {() => (
                        <>
                          <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            variant="outline"
                            border={"none"}
                            borderBottom={"1px solid white"}
                            borderRadius={0}
                            color={"primary.white"}
                            size="lg"
                            fontSize={{
                              base: "md",
                              md: "lg",
                              lg: "xl",
                              "2xl": "3xl",
                            }}
                            px={6}
                            _hover={{
                              color: "primary.yellow",
                              borderColor: "primary.yellow",
                            }}
                            _active={{
                              color: "primary.yellow",
                              borderColor: "primary.yellow",
                            }}
                          >
                            {selectedOption
                              ? selectedOption.categoria
                              : "Selecione uma categoria"}
                          </MenuButton>

                          <MenuList
                            bg={"black"}
                            py={0}
                            minW="200px"
                            boxShadow="xl"
                            border={"1px solid white"}
                            borderRadius={"8px"}
                            overflow={"hidden"}
                          >
                            {listItems.map((item, i) => (
                              <MenuItem
                                key={i}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedOption(item);
                                  navigate(`/dashboard/${item.categoria}`);
                                }}
                                color={"primary.white"}
                                _expanded={{
                                  bg: "black",
                                  border: "1px solid white",
                                  borderRadius: "8px",
                                }}
                                bg={"primary.green"}
                                fontSize={{
                                  base: "md",
                                  md: "lg",
                                  lg: "xl",
                                  "2xl": "3xl",
                                }}
                                transition={".3s"}
                                _hover={{
                                  bg: "primary.white",
                                  color: "primary.green",
                                }}
                                _focus={{
                                  bg: "primary.white",
                                  color: "primary.green",
                                }}
                                px={4}
                                py={3}
                              >
                                <Text fontWeight="medium">
                                  {item.categoria}
                                </Text>
                              </MenuItem>
                            ))}
                          </MenuList>
                        </>
                      )}
                    </Menu>
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
              )}
            </>
          )}
        </>
      )}
    </Flex>
  );
};
