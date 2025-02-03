import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";

export const ListComponent = ({ title, array }) => {
  const navigate = useNavigate();
  const params = useParams();

  const { setSelectedExercise } = useSelectedOption();

  return (
    <Flex
      direction={"column"}
      color="primary.white"
      alignSelf={"start"}
      w={"full"}
      pt={"40px"}
      pl={{ base: "2rem", sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
      pr={2}
      gap={3}
    >
      <Text
        color="primary.white"
        fontSize={{
          base: "2xl",
          sm: "2xl",
          md: "48px",
          lg: "64px",
          xl: "64px",
        }}
        fontWeight={700}
        letterSpacing={"2px"}
      >
        {title}
      </Text>
      <List display={"flex"} flexDirection={"column"} gap={3}>
        {array.map((item, index) => (
          <ListItem
            w={"fit-content"}
            key={index}
            fontSize={{
              base: "md",
              sm: "md",
              md: "lg",
              lg: "lg",
              xl: "2xl",
            }}
            letterSpacing={"1px"}
            fontWeight={600}
            borderBottom="0.5px solid"
            transition=".3s"
            _hover={{ cursor: "pointer", color: "primary.green" }}
            onClick={() => {
              setSelectedExercise(item);
              navigate(`/dashboard/${params.activite}/${item}`);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

ListComponent.propTypes = {
  title: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};
