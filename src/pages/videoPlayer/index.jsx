import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { DescriptionComponent } from "../../components/descriptions";

export const VideoPlayerPage = ({ videoId }) => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "center", lg: "center" }}
      justifyContent="center"
      alignItems="center"
      justifySelf={"center"}
      alignSelf={"center"}
      gap={{ base: 6, sm: 6, md: 6, lg: "3rem" }}
      w="100%"
      height={{
        base: "fit-content",
        sm: "fit-content",
        md: "fit-content",
        lg: "90vh",
      }}
      py={{
        base: 0,
        sm: 0,
        md: 0,
        lg: 1,
      }}
    >
      <Box w={{ base: "100%", sm: "100%", md: "70%", lg: "50%" }}>
        <AspectRatio
          ratio={{ base: 16 / 9, sm: 14 / 7, md: 16 / 9, lg: 19 / 12 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <DescriptionComponent />
    </Flex>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
