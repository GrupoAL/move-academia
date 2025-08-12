import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const InputComponent = forwardRef(
  ({ placeholder, type, bg, ...rest }, ref) => {
    return (
      <Input
        ref={ref}
        type={type}
        bg={bg}
        color="primary.white"
        fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        placeholder={placeholder}
        outline="none"
        border="none"
        p={{ base: 4, sm: 4, md: 6, lg: 8 }}
        _placeholder={{
          color: "primary.white",
          opacity: 0.6,
          fontSize: { base: "sm", sm: "sm", md: "md", lg: "lg" },
        }}
        {...rest}
      />
    );
  }
);
InputComponent.displayName = "InputComponent";

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  bg: PropTypes.any,
};
