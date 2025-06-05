import { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Text,
  Box,
  List,
  ListItem,
  useToast,
  Flex,
  Divider,
  Stack,
  Modal,
  useDisclosure,
  ModalContent,
  ModalOverlay,
  Tooltip,
  Select,
} from "@chakra-ui/react";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { listItems } from "../../Utils";
import { ViewIcon } from "@chakra-ui/icons";

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    exerciseName: "",
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;

      const hasScrollUp = scrollTop > 0;
      const hasScrollDown = scrollTop + clientHeight < scrollHeight;

      if (hasScrollUp) {
        console.log("🔼 Scroll disponível para cima");
        // função para cima
      }

      if (hasScrollDown) {
        console.log("🔽 Scroll disponível para baixo");
        // função para baixo
      }
    };

    // Checar ao montar e ao rolar
    const el = containerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll);
    }

    // Limpeza do listener
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const [categories, setCategories] = useState([]);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, formData]);
    toast({
      title: "Categoria cadastrada",
      description: "A nova categoria foi adicionada com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({
      name: "",
      category: "",
      exerciseName: "",
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir={"column"} gap={8} height={"100%"} justifyContent={"center"}>
      <VStack spacing={6} align="stretch">
        <Flex justifyContent={"space-between"}>
          <Heading
            as="h2"
            fontSize="lg"
            color={"primary.green"}
            fontFamily="Bebas Neue, serif"
          >
            Cadastro de Categorias
          </Heading>
          <Tooltip label="Visualizar categorias">
            <ViewIcon color={"primary.green"} fontSize="lg" onClick={onOpen} />
          </Tooltip>
        </Flex>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Link do video:</FormLabel>
              <InputComponent
                py={{ base: 4, md: 4, lg: 6 }}
                px={{ base: 4, md: 4, lg: 6 }}
                bg="primary.green"
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Categoria:</FormLabel>
              <Select placeholder="Select option">
                {listItems?.map((cat, index) => (
                  <option key={index} value={cat.categoria}>
                    {cat.categoria}
                  </option>
                ))}
              </Select>
              {/* <InputComponent
                py={{ base: 4, md: 4, lg: 6 }}
                px={{ base: 4, md: 4, lg: 6 }}
                bg="primary.green"
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Tipo de exercício"
              /> */}
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Nome do Exercício:</FormLabel>
              <InputComponent
                py={{ base: 4, md: 4, lg: 6 }}
                px={{ base: 4, md: 4, lg: 6 }}
                bg="primary.green"
                type="text"
                name="exerciseName"
                value={formData.exerciseName}
                onChange={handleChange}
                placeholder="Nome específico do exercício"
              />
            </FormControl>

            <ButtonComponent
              type="submit"
              color="primary.green"
              width="full"
              mt={4}
              text={"Cadastrar"}
            />
          </VStack>
        </Box>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"90%"} h={"70%"} overflow={"hidden"}>
          <Stack direction="row" maxH="90%" h={"auto"} px={4}>
            <Divider
              orientation={"vertical"}
              bg={"primary.green"}
              w={"2px"}
              mt={"10%"}
            />
            <Box pt={"2rem"} px={{ base: 4, md: 8 }}>
              <Heading
                fontFamily="Bebas Neue, serif"
                as="h3"
                fontSize="md"
                mb={4}
                color={"primary.green"}
              >
                Categorias Cadastradas
              </Heading>

              {listItems?.length === 0 ? (
                <Text>Nenhum exercicio cadastrado ainda.</Text>
              ) : (
                <List
                  className="category-list"
                  spacing={3}
                  overflowY={"scroll"}
                  h={"90%"}
                >
                  {listItems?.map((cat, index) => (
                    <ListItem
                      key={index}
                      p={4}
                      bg="white"
                      borderRadius="md"
                      boxShadow="sm"
                    >
                      <Text fontWeight="bold" color={"primary.green"}>
                        {cat.categoria}
                      </Text>
                      {cat?.itens?.map((item, index) => (
                        <Text key={`${item}-${index}`}>{`- ${item}`}</Text>
                      ))}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          </Stack>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CategoryForm;
