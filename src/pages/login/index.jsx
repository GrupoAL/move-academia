import { Avatar, Button, Flex } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";

export const LoginPage = () => {
  return (
    <Flex w={"100%"} direction={"column"} alignItems={"center"} gap={5}>
      <Avatar
        w={"200px"}
        h={"100px"}
        src="#"
        sx={{
          bg: "none",
        }}
      ></Avatar>
      <Flex
        w={{ base: "80%", sm: "450px", md: "450px", lg: "550px" }}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          direction={"column"}
          gap={5}
          bg="primary.white"
          p="20px 24px"
          w={"100%"}
          rounded={8}
        >
          <InputComponent
            bg="primary.green"
            placeholder={"SEU EMAIL AQUI"}
            type={"email"}
          />
          <InputComponent
            bg="primary.green"
            placeholder={"SUA SENHA AQUI"}
            type={"password"}
          />
          <ButtonComponent
            text={"CONFIRMAR"}
            bg="primary.green"
            color="primary.white"
          />
        </Flex>
        <Button
          bg="primary.bg"
          color="primary.yellow"
          _hover={{ bg: "none" }}
          alignSelf={"end"}
          fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
          fontWeight={{ base: 600, sm: 600, md: 600, lg: 700 }}
        >
          ESQUECI MINHA SENHA
        </Button>
      </Flex>
    </Flex>
  );
};
