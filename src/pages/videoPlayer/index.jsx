import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { DescriptionComponent } from "../../components/descriptions";
import YouTube from "react-youtube";
import { useState } from "react";

export const VideoPlayerPage = ({ videoId }) => {
  const [isWatched, setIsWatched] = useState(false);
  const handleVideoEnd = () => {
    setIsWatched(true);
  };
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      alignItems="start"
      justifyContent="center"
      w="100%"
      height="100%"
      overflow={"scroll"}
    >
      {/* Área do Vídeo */}
      <Box
        alignSelf="center"
        w="100%"
        height={{ base: "100%", md: "100%", lg: "90%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AspectRatio ratio={16 / 9} w="100%" h="100%" overflow="hidden">
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
            onEnd={handleVideoEnd} // <-- Aqui dispara quando o vídeo termina
          />
          {/* <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onEnded={console.log("Video ended")}
          /> */}
        </AspectRatio>
      </Box>
      <DescriptionComponent isWatched={isWatched} setIsWatched={setIsWatched} />
    </Grid>
  );
};

VideoPlayerPage.propTypes = {
  videoId: PropTypes.string,
};
