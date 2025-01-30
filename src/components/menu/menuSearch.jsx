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
import { useNavigate } from "react-router-dom";
import { listSearch } from "../../Utils";
import { InputComponent } from "../input";

export const MenuSearch = () => {
  const navigate = useNavigate();

  //   const params = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = listSearch.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log({ filteredItems });

  return (
    <Menu>
      <MenuButton
        bg={"primary.white"}
        color="primary.yellow"
        border={"2px solid"}
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
        w={"300px"}
        top={"-275px"}
        left={"-125px"}
      >
        <InputComponent
          placeholder={"Procura algo?"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ borderColor: "white", outline: "white", border: "1px solid" }}
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
