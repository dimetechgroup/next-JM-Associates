import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface CommonHeroProps {
  title: string;
  image: string;
}
const CommonHero: React.FC<CommonHeroProps> = ({ title, image }) => {
  return (
    <Box
      position="relative"
      w="100vw" // 🔥 full viewport width
      left="50%"
      right="50%"
      ml="-50vw"
      mr="-50vw" // 🔥 breaks out of centered layouts
      h={{ base: "250px", md: "350px", lg: "500px" }}
      bgImage={`url(${image})`}
      bgSize={{ base: "120%", md: "110%", lg: "94%" }} // 🔥 responsive background size
      bgRepeat="no-repeat"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {/* Overlay */}
      <Box position="absolute" inset={0} bg="blackAlpha.600" />

      <Heading
        position="relative"
        color="white"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
      >
        {title}
      </Heading>
    </Box>
  );
};

export default CommonHero;
