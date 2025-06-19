import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { listSearch } from "../../Utils";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
// import { useNavigate } from "react-router-dom";
// import { useSelectedOption } from "../../contexts/selectedOptions";

export const MenuSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = listSearch.filter((item) =>
    item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const navigate = useNavigate();

  // const { setSelectedOption } = useSelectedOption();

  return (
    <>
      <ButtonComponent
        bg={{
          base: "primary.white",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        color={{
          base: "primary.yellow",
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
        _hover={{ bg: "primary.yellow", color: "primary.white" }}
        borderColor={"primary.yellow"}
        borderRadius={"100%"}
        fontSize={{ base: "24px", sm: "24px", md: "32px", lg: "32px" }}
        p={0}
        minW={{ base: "44px", sm: "44px", md: "44px", lg: "56px" }}
        minH={{ base: "44px", sm: "44px", md: "44px", lg: "56px" }}
        w={{ base: "44px", sm: "44px", md: "44px", lg: "56px" }}
        h={{ base: "44px", sm: "44px", md: "44px", lg: "56px" }}
        transform={"scaleX(-1)"}
        as={IconButton}
        icon={<TfiSearch />}
        zIndex={2}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          display={"flex"}
          flexDir={"column"}
          bg={"primary.bg"}
          gap={4}
          position={"fixed"}
          zIndex={1}
          p={4}
          maxH={"350px"}
          border={`1px solid #fff`}
        >
          <ModalHeader
            color={"primary.white"}
            fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
            p={"24px 0 0 0"}
          >
            O que pretende treinar hoje?
          </ModalHeader>
          <ModalBody>
            <InputComponent
              type={"text"}
              placeholder={"Procura algo?"}
              value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                borderColor: "white",
                outline: "white",
                border: "1px solid",
                w: "100%",
                _placeholder: {
                  fontSize: { base: "sm", sm: "sm", md: "md", lg: "md" },
                  color: "primary.white",
                },
                py: { base: 4, sm: 4, md: 5, lg: 5 },
                px: { base: 4, sm: 4, md: 5, lg: 5 },
              }}
            />
            <Box maxH={"200px"} overflowY={"scroll"}>
              {filteredItems?.map((item) => (
                <Box
                  bg={"none"}
                  key={item}
                  p={0}
                  w={"fit-content"}
                  color={"primary.white"}
                  fontSize={"sm"}
                  fontWeight={700}
                  borderBottom="0.5px solid"
                  transition=".3s"
                  lineHeight={"24px"}
                  _hover={{ cursor: "pointer", color: "primary.green" }}
                  onClick={() => {
                    // setSelectedOption(item);
                    console.log(`/dashboard/${item.categoria}`);
                    // navigate(`/dashboard/${item.categoria}`);
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
