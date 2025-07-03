import { Avatar, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuthQuery";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { isOpen, onToggle } = useDisclosure();
  // const [visible, setVisible] = useState(false);

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
    mutate({
      email: "sidny@gmail.com",
      password: "Admin123!",
    });
  };

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
