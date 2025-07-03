// src/components/WelcomeAnimation.jsx
import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeAnimation = ({ setVisible }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const user = localStorage.getItem("@moveAcademy:user") || "";

  const compliment = user ? `Bem vindo, ${user.split(" ")[0]}!` : "Até mais!";

  const words = compliment.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setVisible(true);
      return;
    }, 3000);
    return () => clearTimeout(timer);
  }, [user, navigate]);

  const skipAnimation = () => {
    setShowWelcome(false);
    setVisible(true);
  };

  return (
    <>
      {showWelcome && (
        <AnimatePresence>
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
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
        </AnimatePresence>
      )}
    </>
  );
};

export default WelcomeAnimation;

WelcomeAnimation.propTypes = {
  setVisible: PropTypes.func,
};
