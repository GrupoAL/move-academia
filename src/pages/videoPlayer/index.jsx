import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { DescriptionComponent } from "../../components/descriptions";

export const VideoPlayerPage = ({ videoId }) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      alignItems="center"
      justifyContent="center"
      w="100%"
      height="100%"
      overflow={"scroll"}
    >
      {/* Área do Vídeo */}
      <Box
        alignSelf="center"
        w="100%"
        height={{ base: "300px", md: "100%", lg: "90%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AspectRatio ratio={16 / 9} w="100%" h="100%" overflow="hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <DescriptionComponent />
    </Grid>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
