import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Cadeira from "../../assets/images/cadeira.jpg";
import { useSelectedOption } from "../../contexts/selectedOptions";

const materialComplementar = [
  "Estudo cinetífico sobre articulações.",
  "Vídeo sobre cuidados no atendimento ao aluno.",
];

const exText =
  " O exercício de Leg Extension é projetado para fortalecer e isolar o quadríceps, o grupo muscular da parte frontal da coxa. Auxiliando no desenvolvimento de força e definição muscular. Além de ser uma ótima opção para quem deseja melhorar o desempenho em atividades que exigem a extensão das pernas, como correr e saltar, o leg extension também ajuda a fortalecer a articulação do joelho.";

export const DescriptionComponent = () => {
  const [isWatched, setIsWatched] = useState(false);
  const { selectedExercise } = useSelectedOption();
  const [isComplement, setIsComplement] = useState(false);
  const [isFullText, setIsFullText] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      maxH={{
        base: "350px",
        sm: "350px",
        md: "400px",
        lg: "600px",
        xl: "600px",
      }}
      gap={4}
      overflowY={"scroll"}
      pt={"2rem"}
    >
      <Flex
        justify="end"
        align="center"
        w="full"
        maxW="md"
        pr={2}
        color="white"
        gap={2}
      >
        <Text fontSize="md" fontWeight="bold">
          ASSISTIDO
        </Text>
        <Switch
          isChecked={isWatched}
          onChange={(e) => setIsWatched(e.target.checked)}
          size="lg"
          colorScheme="blue"
        />
      </Flex>
      <Flex
        id="Q CAO 1"
        direction="column"
        justifyContent={"start"}
        gap={4}
        w={{
          base: isFullText || isComplement ? "full" : "80%",
          sm: isFullText || isComplement ? "full" : "80%",
          md: isFullText || isComplement ? "full" : "80%",
          lg: isFullText || isComplement ? "25%" : "40%",
          xl: isFullText || isComplement ? "25%" : "30%",
        }}
        pt={{
          base: 0,
          sm: 0,
          md: 2,
          lg: 4,
          xl: 4,
        }}
      >
        <Box
          bg="white"
          w={"full"}
          p={3}
          rounded={"4px"}
          pb={isFullText || isComplement ? "80px" : 0}
        >
          {isComplement ? (
            <Flex
              id="Q CAO"
              direction="column"
              align="start"
              gap={5}
              w={"100vw"}
              position={"relative"}
              px={4}
            >
              <Text fontSize="2xl" fontWeight="bold" fontStyle="italic">
                Material Suplementar
              </Text>
              <List spacing={2} mb={5}>
                {materialComplementar.map((item, index) => (
                  <ListItem
                    fontSize={"sm"}
                    fontWeight={700}
                    textDecoration={"underline"}
                    _hover={{ cursor: "pointer", color: "primary.green" }}
                    key={index}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Flex>
          ) : (
            <>
              <Text
                fontSize={{
                  base: "2xl",
                  sm: "2xl",
                  md: "32px",
                  lg: "36px",
                  xl: "36px",
                }}
                fontWeight="bold"
                fontStyle="italic"
                color="gray.800"
              >
                {selectedExercise}
              </Text>
              <Text
                textAlign="justify"
                fontWeight="bold"
                fontStyle="italic"
                fontSize={{
                  base: "xs",
                  sm: "xs",
                  md: "md",
                  lg: "md",
                  xl: "md",
                }}
                letterSpacing={{
                  base: "1px",
                  sm: "1px",
                  md: "1px",
                  lg: "1px",
                  xl: "1px",
                }}
                mb={2}
              >
                {isFullText ? exText : `${exText.slice(0, 200)}...`}
              </Text>
              <Text
                as="span"
                color="primary.green"
                fontWeight="bold"
                cursor="pointer"
                _hover={{ color: "primary.yellow" }}
                onClick={() =>
                  isFullText ? onOpen() : setIsFullText(!isFullText)
                }
                letterSpacing={"1px"}
                mb={5}
                fontSize={{
                  base: "xs",
                  sm: "xs",
                  md: "md",
                  lg: "md",
                  xl: "md",
                }}
              >
                {isFullText
                  ? "Clique aqui para ver o aparelho."
                  : "Clique aqui para ler."}
              </Text>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  minW={{
                    base: "300px",
                    sm: "300px",
                    md: "550px",
                    lg: "700px",
                    xl: "700px",
                  }}
                  maxW={{
                    base: "300px",
                    sm: "300px",
                    md: "550px",
                    lg: "700px",
                    xl: "700px",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"primary.cardImageBg"}
                  position={"relative"}
                  py={4}
                >
                  <ModalBody>
                    <Image
                      objectFit={"cover"}
                      minW={{
                        base: "250px",
                        sm: "250px",
                        md: "500px",
                        lg: "650px",
                        xl: "650px",
                      }}
                      minH={{
                        base: "250px",
                        sm: "250px",
                        md: "500px",
                        lg: "650px",
                        xl: "650px",
                      }}
                      maxW={{
                        base: "250px",
                        sm: "250px",
                        md: "500px",
                        lg: "650px",
                        xl: "650px",
                      }}
                      maxH={{
                        base: "250px",
                        sm: "250px",
                        md: "500px",
                        lg: "650px",
                        xl: "650px",
                      }}
                      src={Cadeira}
                      alt=""
                    />
                  </ModalBody>

                  <Button
                    border={"none"}
                    position={"absolute"}
                    top={"-15px"}
                    right={"-15px"}
                    onClick={onClose}
                    bg={"primary.yellow"}
                    color={"primary.bg"}
                    _hover={{ bg: "primary.green", color: "primary.white" }}
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    fontStyle={"italic"}
                    p={4}
                    w={"50px"}
                    h={"50px"}
                    rounded={"100%"}
                  >
                    X
                  </Button>
                </ModalContent>
              </Modal>
            </>
          )}
          {(isComplement || isFullText) && (
            <Box
              fontSize={"2xl"}
              transform={"scaleX(-1)"}
              color={"primary.bg"}
              justifySelf={"start"}
              pt={2}
              ml={isComplement ? 4 : 0}
              _hover={{ cursor: "pointer" }}
            >
              <MdOutlineDoubleArrow
                onClick={() => {
                  isComplement
                    ? setIsComplement(!isComplement)
                    : isFullText
                    ? setIsFullText(!isFullText)
                    : null;
                }}
              />
            </Box>
          )}
        </Box>
        {isComplement || isFullText ? (
          <></>
        ) : (
          <Button
            leftIcon={<ChevronDownIcon />}
            bg="white"
            color="primary.green"
            fontSize={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "md",
            }}
            fontWeight="bold"
            letterSpacing="1px"
            shadow="lg"
            w={"full"}
            px={6}
            py={3}
            _hover={{ bg: "green.50" }}
            onClick={() => setIsComplement(!isComplement)}
          >
            MATERIAL COMPLEMENTAR
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
