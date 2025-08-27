import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuSandwich } from "../menu/menuSandwich";
import { MenuSearch } from "../menu/menuSearch";
import { useLogout } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";
import { useEffect, useState } from "react";
import { MenuExercise } from "../menu/menuExercise";

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
                {isDash && isMobile && <MenuExercise />}
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
                  {isDash && <MenuExercise />}
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
