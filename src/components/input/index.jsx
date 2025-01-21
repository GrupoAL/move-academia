import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const InputComponent = ({ placeholder, type, bg }) => {
  return (
    <Input
      type={type}
      bg={bg}
      color="primary.white"
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
      fontWeight={{ base: 600, sm: 600, md: 600, lg: 700 }}
      placeholder={placeholder}
      alignContent={"center"}
      alignItems={"center"}
      textAlign="center"
      outline="none"
      border="none"
      py={{ base: 4, sm: 4, md: 6, lg: 8 }}
      px={{ base: 4, sm: 4, md: 6, lg: 8 }}
      _placeholder={{
        textAlign: "center",
        color: "primary.white",
        fontSize: { base: "sm", sm: "sm", md: "md", lg: "lg" },
        fontWeight: { base: 600, sm: 600, md: 600, lg: 700 },
      }}
    />
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  bg: PropTypes.any,
};
