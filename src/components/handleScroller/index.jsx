import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BounceArrowAnimation } from "../animations/bounceArrow";
import PropTypes from "prop-types";

export const CanScrollComponent = ({ children, scrollRef }) => {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScrollPossibility = () => {
    const el = scrollRef.current;
    if (!el) return;

    const epsilon = 1;

    const isAbleToScrollUp = el.scrollTop > epsilon;
    const isAbleToScrollDown =
      el.scrollTop + el.clientHeight < el.scrollHeight - epsilon;

    setCanScrollUp(isAbleToScrollUp);
    setCanScrollDown(isAbleToScrollDown);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPossibility();

    el.addEventListener("scroll", checkScrollPossibility);

    return () => {
      el.removeEventListener("scroll", checkScrollPossibility);
    };
  }, []);

  useEffect(() => {
    checkScrollPossibility();
  }, []);

  return (
    <>
      <Box
        color="white"
        position={"absolute"}
        top="-2%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {canScrollUp && <BounceArrowAnimation position={"up"} />}
      </Box>
      {children}
      <Box
        mb={2}
        color="white"
        position={"absolute"}
        top="105%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {canScrollDown && <BounceArrowAnimation position={"down"} />}
      </Box>
    </>
  );
};

CanScrollComponent.propTypes = {
  children: PropTypes.node,
  scrollRef: PropTypes.object,
};
