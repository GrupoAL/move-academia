import { HamburgerIcon } from "@chakra-ui/icons";
import { Divider, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { useLogout } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";
import { GrUserAdmin } from "react-icons/gr";

export const MenuSandwich = () => {
  const navigate = useNavigate();
  const { data } = useAppContext();
  const { setSelectedOption } = useSelectedOption();
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };

  return (
    <Menu>
      <MenuButton
        _expanded={{ bg: "none", color: "primary.yellow" }}
        _active={{ bg: "none" }}
        _hover={{ bg: "none" }}
        bg="none"
        color={"primary.white"}
        textAlign={"center"}
        fontSize={"36px"}
        position={"relative"}
        zIndex={2}
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList
        display={"flex"}
        flexDir={"column"}
        alignItems={"end"}
        gap={4}
        position={"relative"}
        zIndex={1}
        top={"-55px"}
        padding="50px 12px 12px 12px"
      >
        {data?.isAdmin && (
          <Text
            cursor={"pointer"}
            color={"primary.bg"}
            fontSize={"lg"}
            fontWeight={700}
            onClick={() => {
              setSelectedOption("admin");
              navigate("/admin");
            }}
            display={"flex"}
            alignItems={"center"}
            gap={3}
            _hover={{ color: "primary.green" }}
          >
            Admin <GrUserAdmin fontSize={"32px"} />
          </Text>
        )}
        <Divider w={"90%"} p={2} />

        <Text
          cursor={"pointer"}
          color={"primary.bg"}
          fontSize={"lg"}
          fontWeight={700}
          onClick={handleLogout}
          display={"flex"}
          alignItems={"center"}
          gap={3}
          _hover={{ color: "primary.green" }}
        >
          Sair <IoExitOutline fontSize={"32px"} />
        </Text>
      </MenuList>
    </Menu>
  );
};
