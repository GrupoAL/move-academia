import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ButtonComponent = ({
  type,
  text,
  color,
  bg,
  isLoading,
  ...rest
}) => {
  return (
    <Button
      isLoading={isLoading}
      bg={type === "outline" ? "none" : bg}
      border="1px solid"
      borderColor={type === "outline" ? bg : "none"}
      color={type === "outline" ? bg : color}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
      fontWeight={700}
      alignContent={"center"}
      alignItems={"center"}
      _hover={{
        bg: type === "outline" ? bg : "none",
        borderColor: type === "outline" ? bg : bg,
        color: type === "outline" ? color : bg,
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  isLoading: PropTypes.boolean,
};
