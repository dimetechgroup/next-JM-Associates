import React from "react";
import { Box, Heading, Text, Container, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

interface CommonHeroProps {
  title: string;
  image: string;
  subtitle?: string;
  overlayOpacity?: number;
  height?: { base: string; md: string; lg: string };
}

const CommonHero: React.FC<CommonHeroProps> = ({
  title,
  image,
  subtitle,
  overlayOpacity = 0.65,
  height = { base: "75vh", md: "80vh", lg: "90vh" },
}) => {
  return (
    <Box
      position="relative"
      w="100%"
      left="50%"
      right="50%"
      ml="-50vw"
      mr="-50vw"
      h={height}
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={`url(${image})`}
        bgSize="contain"
        backgroundPosition={"center"}
        bgRepeat="no-repeat"
        transform="scale(1.05)"
        transition="transform 0.4s ease-out"
        _hover={{ transform: "scale(1.02)" }}
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient={`linear-gradient(to bottom, rgba(0, 0, 0, 0.48), rgba(170, 31, 47, 0.54))`}
      />

      {/* Content Container */}
      <Container
        maxW="container.xl"
        position="relative"
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={4}
      >
        {/* Custom Navigation Bar (Replaces Breadcrumbs) */}
        <HStack
          bg="whiteAlpha.200"
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          borderRadius="full"
          px={6}
          py={2.5}
          mb={6}
          gap={3}
          color="white"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="medium"
          boxShadow="md"
        >
          <Link href="/" passHref>
            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              _hover={{ color: "#aa1f30" }}
              transition="color 0.2s"
            >
              <FaHome size="1rem" />
              Home
            </Box>
          </Link>

          <FaChevronRight size="0.75rem" opacity={0.7} />

          <Box
            color="#aa1f30"
            fontWeight="semibold"
            textShadow="0 1px 3px rgba(0,0,0,0.3)"
          >
            {title}
          </Box>
        </HStack>

        {/* Title */}
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          mb={subtitle ? 4 : 0}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "3px",
            bg: "#aa1f30",
            borderRadius: "full",
            display: subtitle ? "block" : "none",
          }}
        >
          {title}
        </Heading>

        {/* Subtitle */}
        {subtitle && (
          <Text
            color="whiteAlpha.900"
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            maxW="2xl"
            mt={6}
            textShadow="1px 1px 2px rgba(0,0,0,0.3)"
            px={4}
          >
            {subtitle}
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default CommonHero;
