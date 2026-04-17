import { MAPS_EMBED } from "@/config";
import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box h={"45vh"} p={{ base: 5 }}>
      <iframe
        src={MAPS_EMBED}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
