import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { flattenList, listItems } from "../../Utils";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { BounceArrowAnimation } from "../animations/bounceArrow";
import { useNavigate } from "react-router-dom";

export const MenuSearch = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const searchOptions = flattenList(listItems);

  const filteredItems = searchOptions.filter((item) =>
    item?.label
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

  const scrollRef = useRef();

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScrollPossibility = () => {
    const el = scrollRef.current;
    if (!el) return;

    const epsilon = 1;

    const isAbleToScrollUp = el.scrollTop > epsilon;
    const isAbleToScrollDown =
      el.scrollTop + el.clientHeight < el.scrollHeight - epsilon;

    setCanScrollUp(isAbleToScrollUp);
    setCanScrollDown(isAbleToScrollDown);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPossibility();

    el.addEventListener("scroll", checkScrollPossibility);

    return () => {
      el.removeEventListener("scroll", checkScrollPossibility);
    };
  }, []);

  useEffect(() => {
    checkScrollPossibility();
  }, []);

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
          transition={"ease-in 0.3s"}
          w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "40vw" }}
          maxW={{ base: "90vw", md: "60vw", lg: "50vw", xl: "40vw" }}
          maxH={"80vh"}
          h={"80vh"}
          border={`1px solid #fff`}
          px={6}
          py={2}
        >
          <ModalHeader
            color={"primary.white"}
            fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
            px={6}
            pt={6}
            pb={0}
          >
            Procura algo?
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={8}>
            <InputComponent
              type={"text"}
              placeholder={"Digite aqui..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                borderColor: "white",
                outline: "white",
                border: "1px solid",
                w: "100%",
                _placeholder: {
                  fontSize: { base: "sm", sm: "sm", md: "md", lg: "md" },
                  color: "primary.white",
                  opacity: 0.3,
                },
                py: { base: 4, sm: 4, md: 5, lg: 5 },
                px: { base: 4, sm: 4, md: 5, lg: 5 },
              }}
            />

            <Box position={"relative"}>
              <Box
                color="white"
                position={"absolute"}
                top="-2%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                {canScrollUp && <BounceArrowAnimation position={"up"} />}
              </Box>
              <Box
                ref={scrollRef}
                maxH={"50dvh"}
                overflowY={"auto"}
                p={2}
                position={"relative"}
                onScroll={checkScrollPossibility}
              >
                {filteredItems?.map((item) => (
                  <Box
                    key={item.value}
                    p={1}
                    borderBottom="0.5px solid"
                    color={"primary.white"}
                    fontSize={"sm"}
                    fontWeight={700}
                    transition={".3s"}
                    _hover={{
                      cursor: "pointer",
                      color: "primary.green",
                      fontSize: "xl",
                    }}
                    onClick={() => {
                      onClose();
                      navigate(item.value);
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
              <Box
                mb={2}
                color="white"
                position={"absolute"}
                top="105%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                {canScrollDown && <BounceArrowAnimation position={"down"} />}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
