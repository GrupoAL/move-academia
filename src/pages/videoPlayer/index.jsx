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
    <Box
      minW={{ base: "full", sm: "full", md: "full", lg: "1000px" }}
      alignSelf={"start"}
    >
      <AspectRatio ratio={16 / 10}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>

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
            height={{ base: "450px", sm: "400px", md: "400px" }}
            bg="white"
            p={6}
            maxW="md"
          >
            {isComplement ? (
              <Flex
                h={"100%"}
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
                  fontSize="2xl"
                  fontWeight="bold"
                  fontStyle="italic"
                  color="gray.800"
                >
                  {selectedExercise}
                </Text>
                <Text
                  textAlign="justify"
                  fontSize={"sm"}
                  fontWeight="bold"
                  fontStyle="italic"
                  lineHeight={"18px"}
                  letterSpacing={"0.2px"}
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
                    w={"fit-content"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"primary.cardImageBg"}
                    position={"relative"}
                    p={4}
                  >
                    <ModalBody>
                      <Image
                        objectFit={"cover"}
                        w={"300px"}
                        h={"300px"}
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
              bottom={"8rem"}
              fontSize={"2xl"}
              transform={"scaleX(-1)"}
              color={"primary.bg"}
              justifySelf={"end"}
              pt={5}
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

            {/* <Box
              fontSize={"2xl"}
              transform={"scaleX(-1)"}
              color={"primary.bg"}
              justifySelf={"start"}
              pt={5}
              _hover={{ cursor: "pointer" }}
            >
              <MdOutlineDoubleArrow
                onClick={() => setIsFullText(!isFullText)}
              />
            </Box> */}
          </Box>
        </Flex>
      ) : (
        <Flex direction="column" align="center" justify="center" py={6}>
          <Flex
            justify="end"
            align="center"
            w="80%"
            mb={6}
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
            bg="white"
            textAlign="center"
            rounded="4px"
            shadow="lg"
            px={6}
            py={4}
            w="80%"
            mb={6}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              fontStyle="italic"
              color="gray.800"
              mb={2}
            >
              {selectedExercise}
            </Text>
            <Text
              textAlign="justify"
              fontSize={"sm"}
              fontWeight="bold"
              fontStyle="italic"
              lineHeight={"18px"}
              letterSpacing={"0.2px"}
              mb={2}
            >
              O exercício de Leg Extension é projetado para fortalecer e isolar
              o quadríceps, o grupo muscular da parte frontal da coxa.
              Auxiliando no desenvolvimento de força e definição muscular. Além
              de ser uma ótima opção para...
              <Text
                as="span"
                fontSize={"sm"}
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
    </Box>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
