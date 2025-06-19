import {
  Avatar,
  Button,
  Flex,
  SlideFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";
import { useLogin } from "../../hooks/useAuthQuery";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../contexts";

const logins = {
  fake: {
    email: "testePWA@gmail.com",
    password: "Password123!",
  },
  admin: {
    email: "sidny@gmail.com",
    password: "Admin123!",
  },
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const { isOpen, onToggle } = useDisclosure();

  const { mutate, isPending } = useLogin();
  const { data } = useAppContext();
  const handleAnimate = () => {
    onToggle();
    setTimeout(() => {
      navigate("/recoverPassword");
    }, 500);
  };

  const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (loginData) => {
    const token = data?.token;
    const validateToken = localStorage.getItem("@moveAcademy:token");

    if (token === validateToken) {
      navigate("/dashboard");
      return;
    }

    mutate(logins.admin);
  };

  return (
    <SlideFade
      in={!isOpen}
      transition={{ exit: { duration: 0.5 }, enter: { duration: 0.5 } }}
      offsetX="-20px"
      offsetY="0px"
    >
      <Flex
        w={"100%"}
        direction={"column"}
        alignItems={"center"}
        gap={5}
        h={"50%"}
        mt={"3rem"}
      >
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
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            direction={"column"}
            gap={5}
            bg="primary.white"
            p="20px 24px"
            w={"100%"}
            rounded={8}
          >
            <InputComponent
              bg="primary.green"
              placeholder={"E-mail"}
              type={"email"}
              {...register("email")}
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
            <InputComponent
              bg="primary.green"
              placeholder={"Senha"}
              type={"password"}
              {...register("password")}
            />
            {errors.password && (
              <Text color="red.500">{errors.password.message}</Text>
            )}
            <ButtonComponent
              type="submit"
              variant={"outline"}
              text={"Confirmar"}
              bg="primary.green"
              color="primary.white"
              sx={{ w: "150px" }}
              alignSelf={"end"}
              isLoading={isPending}
            />
          </Flex>
          <Button
            bg="primary.bg"
            color="primary.yellow"
            _hover={{ bg: "none", textDecoration: "underline" }}
            alignSelf={"end"}
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
            fontWeight={{ base: 600, sm: 600, md: 600, lg: 700 }}
            onClick={() => handleAnimate()}
          >
            Esqueci minha senha!
          </Button>
        </Flex>
      </Flex>
    </SlideFade>
  );
};
