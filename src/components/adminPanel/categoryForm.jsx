import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
  Radio,
  RadioGroup,
  Collapse,
  Heading,
} from "@chakra-ui/react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonComponent } from "../button";
import { useUpdateAccountSettings } from "../../hooks/useAccountSettings";
import PropTypes from "prop-types";

// Esquema de validação com Yup
const exerciseSchema = yup.object().shape({
  mode: yup.string().required("Selecione o modo de cadastro"),
  newCategory: yup.string().when("mode", {
    is: "category",
    then: yup.string().required("Nome da categoria é obrigatório"),
  }),
  category: yup.string().when("mode", {
    is: (mode) => ["subcategory", "muscleGroup", "exercise"].includes(mode),
    then: yup.string().required("Selecione uma categoria"),
  }),
  newSubcategory: yup.string().when("mode", {
    is: "subcategory",
    then: yup.string().required("Nome da subcategoria é obrigatório"),
  }),
  subcategory: yup.string().when("mode", {
    is: (mode) => ["muscleGroup", "exercise"].includes(mode),
    then: yup.string().required("Selecione uma subcategoria"),
  }),
  newMuscleGroup: yup.string().when(["mode", "subcategory"], {
    is: (mode, subcategory) =>
      mode === "muscleGroup" && subcategory === "Membros Superiores",
    then: yup.string().required("Nome do grupo muscular é obrigatório"),
  }),
  exerciseName: yup.string().when("mode", {
    is: "exercise",
    then: yup.string().required("O nome do exercício é obrigatório"),
  }),
});

export const ExerciseForm = ({ listItems, onAddItem }) => {
  const toast = useToast();
  const { isPending } = useUpdateAccountSettings();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(exerciseSchema),
    defaultValues: {
      mode: "exercise",
    },
  });

  // const [isAddingNew, setIsAddingNew] = useState(false);
  const mode = watch("mode");
  const selectedCategory = watch("category");
  const selectedSubcategory = watch("subcategory");

  // Função para lidar com o envio do formulário
  const onSubmit = (data) => {
    try {
      let message = "";

      switch (data.mode) {
        case "category":
          onAddItem({
            type: "category",
            name: data.newCategory,
          });
          message = `Categoria "${data.newCategory}" adicionada com sucesso!`;
          break;

        case "subcategory":
          onAddItem({
            type: "subcategory",
            category: data.category,
            name: data.newSubcategory,
          });
          message = `Subcategoria "${data.newSubcategory}" adicionada com sucesso!`;
          break;

        case "muscleGroup":
          onAddItem({
            type: "muscleGroup",
            category: data.category,
            subcategory: data.subcategory,
            name: data.newMuscleGroup,
          });
          message = `Grupo muscular "${data.newMuscleGroup}" adicionado com sucesso!`;
          break;

        case "exercise":
          onAddItem({
            type: "exercise",
            category: data.category,
            subcategory: data.subcategory,
            muscleGroup:
              selectedSubcategory === "Membros Superiores"
                ? data.muscleGroup
                : null,
            name: data.exerciseName,
          });
          message = `Exercício "${data.exerciseName}" cadastrado com sucesso!`;
          break;

        default:
          throw new Error("Modo de cadastro inválido");
      }

      toast({
        title: "Sucesso",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Obter categorias principais
  const mainCategories = listItems.map((item) => item.categoria);

  // Obter subcategorias baseado na categoria selecionada
  const getSubcategories = () => {
    if (!selectedCategory) return [];
    const category = listItems.find(
      (item) => item.categoria === selectedCategory
    );
    return category?.itens?.map((item) => item.nome) || [];
  };

  // Obter grupos musculares baseado na subcategoria selecionada
  const getMuscleGroups = () => {
    if (!selectedSubcategory || selectedSubcategory !== "Membros Superiores")
      return [];
    const category = listItems.find(
      (item) => item.categoria === selectedCategory
    );
    const subcategory = category?.itens?.find(
      (item) => item.nome === selectedSubcategory
    );
    return subcategory?.itens?.map((item) => item.nome) || [];
  };

  return (
    <Box maxW="md" mx="auto">
      <Heading
        as="h2"
        fontSize="lg"
        fontFamily={"Bebas Neue, serif"}
        color={"primary.green"}
      >
        Cadastros
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>o que vamos cadastrar?</FormLabel>
            <RadioGroup
              value={mode}
              onChange={(val) => {
                setValue("mode", val);
                reset({
                  mode: val,
                });
              }}
            >
              <Stack direction="column">
                <Radio value="exercise">Exercício</Radio>
                <Radio value="muscleGroup">Grupo Muscular</Radio>
                <Radio value="subcategory">Subcategoria</Radio>
                <Radio value="category">Categoria</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* Formulário para nova categoria */}
          <Collapse in={mode === "category"} animateOpacity>
            <FormControl isInvalid={!!errors.newCategory}>
              <FormLabel htmlFor="newCategory">Nova Categoria</FormLabel>
              <Input
                id="newCategory"
                placeholder="Digite o nome da nova categoria"
                {...register("newCategory")}
              />
              <FormErrorMessage>
                {errors.newCategory && errors.newCategory.message}
              </FormErrorMessage>
            </FormControl>
          </Collapse>

          {/* Formulário para nova subcategoria */}
          <Collapse in={mode === "subcategory"} animateOpacity>
            {mode === "subcategory" && (
              <>
                <FormControl isInvalid={!!errors.category}>
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select
                    id="category"
                    placeholder="Selecione uma categoria"
                    {...register("category")}
                  >
                    {mainCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.category && errors.category.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.newSubcategory}>
                  <FormLabel htmlFor="newSubcategory">
                    Nova Subcategoria
                  </FormLabel>
                  <Input
                    id="newSubcategory"
                    placeholder="Digite o nome da nova subcategoria"
                    {...register("newSubcategory")}
                  />
                  <FormErrorMessage>
                    {errors.newSubcategory && errors.newSubcategory.message}
                  </FormErrorMessage>
                </FormControl>
              </>
            )}
          </Collapse>

          {/* Formulário para novo grupo muscular */}
          <Collapse in={mode === "muscleGroup"} animateOpacity>
            {mode === "muscleGroup" && (
              <>
                <FormControl isInvalid={!!errors.category}>
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select
                    id="category"
                    placeholder="Selecione uma categoria"
                    {...register("category")}
                    onChange={(e) => {
                      setValue("subcategory", "");
                      setValue("category", e.target.value);
                    }}
                  >
                    {mainCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.category && errors.category.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.subcategory}>
                  <FormLabel htmlFor="subcategory">Subcategoria</FormLabel>
                  <Select
                    id="subcategory"
                    placeholder="Selecione uma subcategoria"
                    {...register("subcategory")}
                  >
                    {getSubcategories().map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.subcategory && errors.subcategory.message}
                  </FormErrorMessage>
                </FormControl>

                {selectedSubcategory === "Membros Superiores" && (
                  <FormControl isInvalid={!!errors.newMuscleGroup}>
                    <FormLabel htmlFor="newMuscleGroup">
                      Novo Grupo Muscular
                    </FormLabel>
                    <Input
                      id="newMuscleGroup"
                      placeholder="Digite o nome do novo grupo muscular"
                      {...register("newMuscleGroup")}
                    />
                    <FormErrorMessage>
                      {errors.newMuscleGroup && errors.newMuscleGroup.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </>
            )}
          </Collapse>

          {/* Formulário para novo exercício */}
          <Collapse in={mode === "exercise"} animateOpacity>
            {mode === "exercise" && (
              <>
                <FormControl isInvalid={!!errors.category}>
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select
                    id="category"
                    placeholder="Selecione uma categoria"
                    {...register("category")}
                    onChange={(e) => {
                      setValue("subcategory", "");
                      setValue("category", e.target.value);
                    }}
                  >
                    {mainCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.category && errors.category.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.subcategory}>
                  <FormLabel htmlFor="subcategory">Subcategoria</FormLabel>
                  <Select
                    id="subcategory"
                    placeholder="Selecione uma subcategoria"
                    {...register("subcategory")}
                  >
                    {getSubcategories().map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.subcategory && errors.subcategory.message}
                  </FormErrorMessage>
                </FormControl>

                {selectedSubcategory === "Membros Superiores" && (
                  <FormControl isInvalid={!!errors.muscleGroup}>
                    <FormLabel htmlFor="muscleGroup">Grupo Muscular</FormLabel>
                    <Select
                      id="muscleGroup"
                      placeholder="Selecione um grupo muscular"
                      {...register("muscleGroup")}
                    >
                      {getMuscleGroups().map((muscleGroup) => (
                        <option key={muscleGroup} value={muscleGroup}>
                          {muscleGroup}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.muscleGroup && errors.muscleGroup.message}
                    </FormErrorMessage>
                  </FormControl>
                )}

                <FormControl isInvalid={!!errors.exerciseName}>
                  <FormLabel htmlFor="exerciseName">
                    Nome do Exercício
                  </FormLabel>
                  <Input
                    id="exerciseName"
                    placeholder="Digite o nome do exercício"
                    {...register("exerciseName")}
                  />
                  <FormErrorMessage>
                    {errors.exerciseName && errors.exerciseName.message}
                  </FormErrorMessage>
                </FormControl>
              </>
            )}
          </Collapse>

          <ButtonComponent
            type="submit"
            variant={"solid"}
            color="primary.green"
            width="full"
            mt={{ base: 2, md: 4 }}
            isLoading={isPending}
            loadingText="Atualizando..."
            text={"Atualizar Dados"}
          >
            {mode === "category" && "Adicionar Categoria"}
            {mode === "subcategory" && "Adicionar Subcategoria"}
            {mode === "muscleGroup" && "Adicionar Grupo Muscular"}
            {mode === "exercise" && "Cadastrar Exercício"}
          </ButtonComponent>
        </Stack>
      </form>
    </Box>
  );
};

ExerciseForm.propTypes = {
  listItems: PropTypes.array,
  onAddItem: PropTypes.func,
};
