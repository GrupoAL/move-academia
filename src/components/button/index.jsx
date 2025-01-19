import { Button } from "@chakra-ui/react";

export const ButtonComponent = ({ text, color, bg, ...rest }) => {
  return (
    <Button
      bg={bg}
      color={color}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
      fontWeight={700}
      alignContent={"center"}
      alignItems={"center"}
      {...rest}
    >
      {text}
    </Button>
  );
};
