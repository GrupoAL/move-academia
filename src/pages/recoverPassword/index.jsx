import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";

export const RecoverPasswordPage = () => {
  return (
    <Flex w={"100%"} direction={"column"} alignItems={"center"} gap={5}>
      <Flex
        bg="primary.green"
        w={{ base: "320px", sm: "320px", md: "460px", lg: "560px" }}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={8}
        py={8}
        px={2}
        gap={8}
      >
        <Flex direction={"column"} gap={8} alignItems={"center"}>
          <Text
            textAlign={"center"}
            color="primary.white"
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
            fontWeight={{ base: 600, sm: 600, md: 600, lg: 700 }}
          >
            SÃO TANTAS SENHAS PARA LEMBRAR, <br />
            ÀS VEZES É NORMAL ESQUECER!
          </Text>
          <Box>
            <Text
              color="primary.white"
              fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
              fontWeight={{ base: 600, sm: 600, md: 600, lg: 700 }}
              mb={1}
            >
              COLOQUE O SEU E-MAIL ABAIXO:
            </Text>
            <InputComponent bg="primary.white" type={"email"} />
          </Box>
        </Flex>
        <Flex justifyContent={"space-evenly"} w={"100%"} alignItems={"center"}>
          <Button
            bg={"none"}
            _hover={{ bg: "none" }}
            color="primary.white"
            fontSize={"36px"}
            fontWeight={{ base: 600, sm: 600, md: 700, lg: 700 }}
            transform={"rotate(-45deg) scaleX(-1)"}
          >
            <GrRefresh />
          </Button>
          <ButtonComponent
            bg="primary.white"
            color="primary.green"
            text={"ENVIAR"}
            sx={{ h: "32px", w: "100px" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
