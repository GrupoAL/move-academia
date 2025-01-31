import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
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
import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Cadeira from "../../assets/images/cadeira.jpg";
import { useSelectedOption } from "../../contexts/selectedOptions";

export const VideoPlayerPage = ({ videoId }) => {
  const [isWatched, setIsWatched] = useState(false);
  const { selectedExercise } = useSelectedOption();
  const [isComplement, setIsComplement] = useState(false);
  const [isFullText, setIsFullText] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "center", lg: "flex-start" }}
      justify="center"
      alignItems="center"
      gap={6}
      w="100%"
      p={4}
    >
      {/* Video Section */}
      <Box w={{ base: "100%", sm: "100%", md: "70%", lg: "50%" }}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>

      {isFullText || isComplement ? (
        <Flex
          minH={"fit-content"}
          direction="column"
          justifyContent={"start"}
          h={"100%"}
          mt={6}
        >
          <Flex
            justify="end"
            align="center"
            w="full"
            maxW="md"
            mb={6}
            pr={5}
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

          <Box
            height={{ base: "350px", sm: "400px", md: "400px" }}
            bg="white"
            p={6}
            maxW="md"
            position={"relative"}
          >
            {isComplement ? (
              <Flex
                direction="column"
                align="start"
                gap={5}
                position={"relative"}
              >
                <Text fontSize="2xl" fontWeight="bold" fontStyle="italic">
                  Material Suplementar
                </Text>
                <List spacing={2} mb={5}>
                  {[
                    "Estudo cinetífico sobre articulações.",
                    "Vídeo sobre cuidados no atendimento ao aluno.",
                  ].map((item, index) => (
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
                    base: "sm",
                    sm: "sm",
                    md: "md",
                    lg: "md",
                    xl: "md",
                  }}
                  lineHeight={{
                    base: "18px",
                    sm: "18px",
                    md: "24px",
                    lg: "24px",
                    xl: "24px",
                  }}
                  letterSpacing={{
                    base: "0.2px",
                    sm: "0.2px",
                    md: "1px",
                    lg: "1px",
                    xl: "1px",
                  }}
                  mb={2}
                >
                  O exercício de Leg Extension é projetado para fortalecer e
                  isolar o quadríceps, o grupo muscular da parte frontal da
                  coxa. Auxiliando no desenvolvimento de força e definição
                  muscular. Além de ser uma ótima opção para quem deseja
                  melhorar o desempenho em atividades que exigem a extensão das
                  pernas, como correr e saltar, o leg extension também ajuda a
                  fortalecer a articulação do joelho.
                </Text>
                <Text
                  as="span"
                  color="primary.yellow"
                  fontWeight="bold"
                  cursor="pointer"
                  _hover={{ color: "primary.green" }}
                  onClick={onOpen}
                  letterSpacing={"0.2px"}
                  mb={5}
                >
                  Clique aqui para ver o aparelho.
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
            <Box
              position={"absolute"}
              bottom={"1rem"}
              fontSize={"2xl"}
              transform={"scaleX(-1)"}
              color={"primary.bg"}
              justifySelf={"end"}
              _hover={{ cursor: "pointer" }}
            >
              <MdOutlineDoubleArrow
                onClick={() => {
                  isComplement
                    ? setIsComplement(!isComplement)
                    : setIsFullText(!isFullText);
                }}
              />
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex
          direction="column"
          align="center"
          justify="center"
          py={6}
          px={{ base: 0, sm: 0, md: 0, lg: 6, xl: 6 }}
          w={{ base: "80%", sm: "80%", md: "80%", lg: "40%", xl: "30%" }}
        >
          <Flex justify="end" alignSelf="end" mb={6} color="white" gap={2}>
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

          <Box
            bg="white"
            textAlign="center"
            rounded="4px"
            shadow="lg"
            px={6}
            py={4}
            mb={6}
          >
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
              mb={2}
            >
              {selectedExercise}
            </Text>
            <Text
              textAlign="justify"
              fontWeight="bold"
              fontStyle="italic"
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "md",
                lg: "md",
                xl: "md",
              }}
              lineHeight={{
                base: "18px",
                sm: "18px",
                md: "24px",
                lg: "24px",
                xl: "24px",
              }}
              letterSpacing={{
                base: "0.2px",
                sm: "0.2px",
                md: "1px",
                lg: "1px",
                xl: "1px",
              }}
              mb={2}
            >
              O exercício de Leg Extension é projetado para fortalecer e isolar
              o quadríceps, o grupo muscular da parte frontal da coxa.
              Auxiliando no desenvolvimento de força e definição muscular. Além
              de ser uma ótima opção para...{" "}
              <Text
                as="span"
                fontSize={{
                  base: "sm",
                  sm: "sm",
                  md: "md",
                  lg: "md",
                  xl: "md",
                }}
                color="primary.yellow"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => setIsFullText(!isFullText)}
              >
                Clique aqui para ler.
              </Text>
            </Text>
          </Box>

          <Button
            leftIcon={<ChevronDownIcon />}
            bg="white"
            color="green.600"
            fontSize={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "md",
            }}
            fontWeight="bold"
            rounded="2xl"
            shadow="lg"
            px={6}
            py={3}
            _hover={{ bg: "green.50" }}
            onClick={() => setIsComplement(!isComplement)}
          >
            MATERIAL COMPLEMENTAR
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
