import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGetExercises } from "../../hooks/useExercisesQuery";

export const MenuExercise = () => {
  const navigate = useNavigate();
  const { setSelectedOption, selectedOption } = useSelectedOption();
  const { data: listItems } = useGetExercises();

  return (
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
            {listItems &&
              listItems.map((item, i) => (
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
                  <Text fontWeight="medium">{item.categoria}</Text>
                </MenuItem>
              ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
