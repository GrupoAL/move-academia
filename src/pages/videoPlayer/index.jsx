import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Switch,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useSelectedOption } from "../../contexts/selectedOptions";

export const VideoPlayerPage = ({ videoId }) => {
  const [isWatched, setIsWatched] = useState(false);
  const { selectedExercise } = useSelectedOption();
  const [isComplement, setIsComplement] = useState(false);

  return (
    <Box
      minW={{ base: "full", sm: "full", md: "full", lg: "1000px" }}
      alignSelf={"start"}
    >
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>

      {isComplement ? (
        <Flex minH={"fit-content"} direction="column" justifyContent={"start"}>
          <Flex
            justify="end"
            align="center"
            w="full"
            maxW="md"
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
          <Box minH={"full"} bg="white" p={6} maxW="md">
            <Text
              fontSize="lg"
              fontWeight="bold"
              fontStyle="italic"
              color="gray.800"
              mb={4}
            >
              MATERIAL COMPLEMENTAR
            </Text>
            <List
              fontWeight="bold"
              fontStyle="italic"
              textDecoration={"underline"}
              lineHeight={"26px"}
            >
              <ListItem>Lorem ipsum, dolor </ListItem>
              <ListItem>Lorem, ipsum dolor sit amet consectetur</ListItem>
            </List>
            <Box
              transform={"scaleX(-1)"}
              color={"primary.bg"}
              justifySelf={"start"}
            >
              <MdOutlineDoubleArrow
                onClick={() => setIsComplement(!isComplement)}
              />
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex direction="column" align="center" justify="center" p={6}>
          <Flex
            justify="end"
            align="center"
            w="full"
            maxW="md"
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
            rounded="2xl"
            shadow="lg"
            p={6}
            maxW="md"
            mb={6}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              fontStyle="italic"
              color="gray.800"
              mb={4}
            >
              {selectedExercise}
            </Text>
            <Text color="gray.600" px={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              tempora eligendi fugit placeat, aspernatur accusamus eius
              voluptatum minus iure sequi reprehenderit...{" "}
              <Text
                as="span"
                color="yellow.500"
                fontWeight="bold"
                cursor="pointer"
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
