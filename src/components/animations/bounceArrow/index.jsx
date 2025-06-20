import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import PropTypes from "prop-types";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); 
  }
  40% {
    transform: translateY(-10px); 
  }
  60% {
    transform: translateY(-5px); 
  }
`;

export const BounceArrowAnimation = ({ position }) => {
  const animation = `${bounce} 1s infinite ease-in-out`;

  return (
    <Box
      transform={"rotate(90deg)"}
      animation={animation}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box transform={"rotate(90deg)"}>
        {position === "up" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </Box>
    </Box>
  );
};

BounceArrowAnimation.propTypes = {
  position: PropTypes.string,
};
