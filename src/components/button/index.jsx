import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

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

ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
};
