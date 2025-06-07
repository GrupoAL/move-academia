import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ButtonComponent = ({
  variant,
  type,
  text,
  color,
  bg,
  isLoading,
  ...rest
}) => {
  return (
    <Button
      type={type}
      isLoading={isLoading}
      bg={variant === "outline" ? "none" : bg}
      border="1px solid"
      borderColor={variant === "outline" ? bg : "none"}
      color={variant === "outline" ? bg : color}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
      fontWeight={700}
      alignContent={"center"}
      alignItems={"center"}
      _hover={{
        bg: variant === "outline" ? bg : "none",
        borderColor: variant === "outline" ? bg : bg,
        color: variant === "outline" ? color : bg,
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  isLoading: PropTypes.boolean,
};
