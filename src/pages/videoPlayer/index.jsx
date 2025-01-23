import { AspectRatio, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const VideoPlayerPage = ({ videoId }) => {
  return (
    <Box
      minW={{ base: "full", sm: "full", md: "full", lg: "1000px" }}
      alignSelf={"start"}
    >
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
