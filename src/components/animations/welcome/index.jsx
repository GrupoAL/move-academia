import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts";

const WelcomeAnimation = () => {
  const { canAnimate, setCanAnimate } = useAppContext();

  const words = canAnimate.message.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanAnimate({ run: false, message: "" });
      return;
    }, 3000);
    return () => clearTimeout(timer);
  }, [canAnimate]);

  const skipAnimation = () => {
    setCanAnimate({ run: false, message: "" });
  };

  return (
    <>
      <AnimatePresence>
        {canAnimate.run && (
          <motion.div
            initial={{ y: "-100vh", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={skipAnimation}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 10000,
            }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="primary.green"
            >
              {words.map((word, wordIndex) => (
                <Box key={wordIndex} display="flex" mx={2}>
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        delay: wordIndex * 0.5 + letterIndex * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <Text
                        as="span"
                        fontSize="4xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                      >
                        {letter}
                      </Text>
                    </motion.span>
                  ))}
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WelcomeAnimation;
