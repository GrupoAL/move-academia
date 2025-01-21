import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ListComponent = ({ title, array }) => {
  return (
    <Flex
      direction={"column"}
      color="primary.white"
      alignSelf={"start"}
      w={"full"}
      pt={"80px"}
      pl={12}
      pr={2}
      gap={3}
      textTransform={"uppercase"}

      // overflowY={"scroll"}
      // height={"200px"}
    >
      <Text color="primary.white" fontSize={"xl"} fontWeight={700}>
        {title}
      </Text>
      <List display={"flex"} flexDirection={"column"} gap={2}>
        {array.map((item, index) => (
          <ListItem
            w={"fit-content"}
            key={index}
            fontSize={"md"}
            fontWeight={600}
            borderBottom="0.5px solid"
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
