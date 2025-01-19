import { Avatar, Button, Flex } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";
import theme from "../../themes";

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
          bg={theme.colors.white}
          p="20px 24px"
          w={"100%"}
          rounded={8}
        >
          <InputComponent
            bg={theme.colors.green}
            placeholder={"SEU EMAIL AQUI"}
            type={"email"}
          />
          <InputComponent
            bg={theme.colors.green}
            placeholder={"SUA SENHA AQUI"}
            type={"password"}
          />
          <ButtonComponent
            text={"CONFIRMAR"}
            bg={theme.colors.green}
            color={theme.colors.white}
          />
        </Flex>
        <Button
          bg={theme.colors.bg}
          color={theme.colors.yellow}
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
