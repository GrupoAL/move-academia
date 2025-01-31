import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { listSearch } from "../../Utils";
import { InputComponent } from "../input";

export const MenuSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = listSearch.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Menu>
      <MenuButton
        bg={{
          base: "primary.white",
          sm: "primary.white",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        color={{
          base: "primary.yellow",
          sm: "primary.yellow",
          md: "primary.white",
          lg: "primary.white",
          xl: "primary.white",
        }}
        border={{
          base: "2px solid",
          sm: "2px solid",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        borderColor={"primary.yellow"}
        borderRadius={"100%"}
        fontSize={"40px"}
        p={0}
        minW={"60px"}
        minH={"60px"}
        transform={"scaleX(-1)"}
        as={IconButton}
        icon={<TfiSearch />}
        zIndex={2}
      />

      <MenuList
        display={"flex"}
        flexDir={"column"}
        bg={"primary.cardImageBg"}
        gap={4}
        position={"fixed"}
        zIndex={1}
        p={4}
        maxH={"350px"}
        w={{
          base: "300px",
          sm: "300px",
          md: "550px",
          lg: "600px",
          xl: "600px",
        }}
        top={{
          base: "-275px",
          sm: "-275px",
          md: "-75px",
          lg: "-75px",
          xl: "-75px",
        }}
        left={{
          base: "-125px",
          sm: "-125px",
          md: "-480px",
          lg: "-525px",
          xl: "-525px",
        }}
      >
        <InputComponent
          type={"text"}
          placeholder={"Procura algo?"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            borderColor: "white",
            outline: "white",
            border: "1px solid",
            w: {
              md: "450px",
              lg: "500px",
              xl: "500px",
            },
            _placeholder: {
              fontSize: { base: "sm", sm: "sm", md: "md", lg: "md" },
            },
            py: { base: 4, sm: 4, md: 5, lg: 5 },
            px: { base: 4, sm: 4, md: 5, lg: 5 },
          }}
        />
        <Box maxH={"350px"} overflowY={"scroll"}>
          {filteredItems?.map((item) => (
            <MenuItem
              bg={"none"}
              key={item}
              p={0}
              w={"fit-content"}
              color={"primary.white"}
              fontSize={"sm"}
              fontStyle={"italic"}
              fontWeight={700}
              borderBottom="0.5px solid"
              transition=".3s"
              lineHeight={"24px"}
              _hover={{ cursor: "pointer", color: "primary.green" }}
              onClick={() => {
                // setSelectedOption(item);
                // navigate(`/dashboard/${item.categoria}`);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Box>
      </MenuList>
    </Menu>
  );
};
