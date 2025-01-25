import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { listItems } from "../../Utils";

export const MenuComponent = () => {
  const navigate = useNavigate();

  //   const params = useParams();

  const { setSelectedOption } = useSelectedOption();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        _expanded={{ bg: "none", color: "primary.yellow" }} // Garante que o fundo não muda quando expandido
        _active={{ bg: "none" }} // Garante que o fundo não muda quando clicado
        _hover={{ bg: "none" }} // Garante que o fundo não muda ao passar o mouse
        bg="none"
        icon={<HamburgerIcon />}
        color={"primary.white"}
        fontSize={"36px"}
        position={"relative"}
        zIndex={2}
      />
      <MenuList
        display={"flex"}
        flexDir={"column"}
        alignItems={"end"}
        gap={4}
        position={"relative"}
        zIndex={1}
        top={"-50px"}
        padding="50px 12px 12px 12px"
      >
        {listItems.map((item) => (
          <MenuItem
            key={item.categoria}
            p={0}
            w={"fit-content"}
            color={"primary.bg"}
            fontSize={"lg"}
            fontStyle={"italic"}
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
      </MenuList>
    </Menu>
  );
};
