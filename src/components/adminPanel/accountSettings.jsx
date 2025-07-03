import {
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { useUpdateAccountSettings } from "../../hooks/useAccountSettings";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AccountSettings = () => {
  const { mutate, isPending } = useUpdateAccountSettings();

  // const handleAnimate = () => {
  //   onToggle();
  //   setTimeout(() => {
  //     navigate("/recoverPassword");
  //   }, 500);
  // };
  const navigate = useNavigate();
  const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    senhaAtual: yup.string().required("Senha é obrigatória"),
    novaSenha: yup.string().required("Senha é obrigatória"),
    confirmarNovaSenha: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // const token = data?.token;
    // const validateToken = localStorage.getItem("@moveAcademy:token");

    // if (token === validateToken) {
    //   navigate("/dashboard");
    //   return;
    // }

    mutate(data);
  };
  return (
    <VStack spacing={{ base: 2, sm: 2, md: 6, lg: 6 }} align="stretch">
      <Heading
        as="h2"
        fontSize="lg"
        fontFamily={"Bebas Neue, serif"}
        color={"primary.green"}
      >
        Configurações de Conta
      </Heading>

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={{ base: 2, sm: 2, md: 4, lg: 4 }}>
          <FormControl isRequired>
            <FormLabel>E-mail:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="email"
              name="email"
              {...register("email")} // Registering the input with react-hook-form
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha Atual:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="currentPassword"
              {...register("senhaAtual")} // Registering the input with react-hook-form
              placeholder="Digite sua senha atual"
            />
            {errors.senhaAtual && (
              <Text color="red.500">{errors.senhaAtual.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Nova Senha:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="newPassword"
              {...register("novaSenha")} // Registering the input with react-hook-form
              placeholder="Digite a nova senha"
            />
            {errors.novaSenha && (
              <Text color="red.500">{errors.novaSenha.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirmar Nova Senha:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="confirmPassword"
              {...register("confirmarNovaSenha")} // Registering the input with react-hook-form
              placeholder="Confirme a nova senha"
            />
            {errors.confirmarNovaSenha && (
              <Text color="red.500">{errors.confirmarNovaSenha.message}</Text>
            )}
          </FormControl>

          <ButtonComponent
            type="submit"
            variant={"solid"}
            color="primary.green"
            width="full"
            mt={{ base: 2, md: 4 }}
            isLoading={isPending}
            loadingText="Atualizando..."
            text={"Atualizar Dados"}
          />
        </VStack>
      </Box>
    </VStack>
  );
};

export default AccountSettings;
