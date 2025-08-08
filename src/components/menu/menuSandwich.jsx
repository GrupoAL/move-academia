import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { listItems } from "../../Utils";
import { useLogout } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";

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
        {listItems.map((item) => (
          <MenuItem
            key={item.categoria}
            p={0}
            w={"fit-content"}
            color={"primary.bg"}
            fontSize={"lg"}
            fontWeight={700}
            borderBottom="0.5px solid"
            transition=".3s"
            lineHeight={"24px"}
            _hover={{ cursor: "pointer", color: "primary.green" }}
            onClick={() => {
              setSelectedOption(item);
              navigate(`/dashboard/${item.categoria}`);
            }}
          >
            {item.categoria}
          </MenuItem>
        ))}
        <Divider w={"90%"} p={2} />
        {data?.isAdmin && (
          <Text
            cursor={"pointer"}
            color={"primary.bg"}
            fontSize={"lg"}
            fontWeight={700}
            onClick={() => navigate("/admin")}
            display={"flex"}
            alignItems={"center"}
            gap={3}
            _hover={{ color: "primary.green" }}
          >
            Admin
          </Text>
        )}
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
