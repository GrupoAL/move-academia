import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

export const ListComponent = ({ title, array }) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log({ params });
  return (
    <Flex
      direction={"column"}
      color="primary.white"
      alignSelf={"start"}
      w={"full"}
      pt={"40px"}
      pl={12}
      pr={2}
      gap={3}
    >
      <Text color="primary.white" fontSize={"xl"} fontWeight={700}>
        {title}
      </Text>
      <List display={"flex"} flexDirection={"column"} gap={3}>
        {array.map((item, index) => (
          <ListItem
            w={"fit-content"}
            key={index}
            fontSize={"md"}
            fontWeight={600}
            borderBottom="0.5px solid"
            transition=".3s"
            _hover={{ cursor: "pointer", color: "primary.green" }}
            onClick={() => navigate(`/dashboard/${params.activite}/${item}`)}
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
