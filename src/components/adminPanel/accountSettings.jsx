import { useState } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  useToast,
  Box,
} from "@chakra-ui/react";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";

const AccountSettings = () => {
  const [accountData, setAccountData] = useState({
    email: "admin@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (accountData.newPassword !== accountData.confirmPassword) {
      setMessage("As senhas não coincidem!");
      setIsLoading(false);
      return;
    }

    // Simulando chamada API
    setTimeout(() => {
      toast({
        title: "Dados atualizados",
        description: "Suas informações foram atualizadas com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAccountData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setMessage("");
      setIsLoading(false);
    }, 1500);
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

      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={{ base: 2, sm: 2, md: 4, lg: 4 }}>
          <FormControl isRequired>
            <FormLabel>E-mail:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="email"
              name="email"
              value={accountData.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha Atual:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="currentPassword"
              value={accountData.currentPassword}
              onChange={handleChange}
              placeholder="Digite sua senha atual"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Nova Senha:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="newPassword"
              value={accountData.newPassword}
              onChange={handleChange}
              placeholder="Digite a nova senha"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirmar Nova Senha:</FormLabel>
            <InputComponent
              p={{ base: 4, sm: 4, md: 4, lg: 6 }}
              bg="primary.green"
              type="password"
              name="confirmPassword"
              value={accountData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirme a nova senha"
            />
          </FormControl>

          {message && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {message}
            </Alert>
          )}

          <ButtonComponent
            type="submit"
            color="primary.green"
            width="full"
            mt={{ base: 2, md: 4 }}
            isLoading={isLoading}
            loadingText="Atualizando..."
            text={"Atualizar Dados"}
          />
        </VStack>
      </Box>
    </VStack>
  );
};

export default AccountSettings;
