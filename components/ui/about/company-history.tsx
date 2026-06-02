"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Grid,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { FaCalendarAlt, FaFlag, FaAward } from "react-icons/fa";

const CompanyHistory = () => {
  const { sectionData, error, loading } = useDefaultSectionData("aboutus");

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }

  // Sample milestones - you can make these dynamic from CMS
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to deliver excellence",
      icon: FaCalendarAlt,
    },
    {
      year: "2018",
      title: "First Major Achievement",
      description: "Reached 100+ successful projects",
      icon: FaFlag,
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded for outstanding service",
      icon: FaAward,
    },
  ];

  return (
    <Box py={{ base: 3, md: 5, lg: 6 }} px={{ base: 4 }} w={"full"} bg="white">
      {/* Hero Image Section */}
      <Box
        position="relative"
        mb={{ base: 8, md: 12 }}
        // mx={MarginX}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
      >
        <AspectRatio ratio={16 / 9} maxW="full">
          <Image
            src={
              sectionData?.image?.path
                ? `https://cms.jmassociates.co.ke/storage/uploads${sectionData.image.path}`
                : "/about.jpg"
            }
            alt="Company Building"
            objectFit="cover"
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </AspectRatio>

        {/* Optional overlay text */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bgGradient="linear(to-t, blackAlpha.800, transparent)"
          p={6}
        >
          <Text
            color="white"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
          >
            Our Journey Through Excellence
          </Text>
        </Box>
      </Box>

      {/* History Content Section */}
      <Container w="full" px={{ base: 4, md: 6 }}>
          <VStack align="stretch">
            {/* Title with Decorative Element */}
            <Box textAlign="center" position="relative">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="gray.800"
                mb={4}
                letterSpacing="tight"
              >
                {sectionData?.title || "Our Company History"}
              </Heading>
              <Box
                w="80px"
                h="3px"
                bg="#aa1f30"
                mx="auto"
                mb={6}
                borderRadius="full"
              />
              <Text
                color="#aa1f30"
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Building Excellence Since 2014
              </Text>
            </Box>

            {/* Description with Improved Readability */}
            <Box
              p={{ base: 3, md: 4}}
            >
              {sectionData?.title || "Our Company History"}
            </Heading>
            <Box
              w="80px"
              h="3px"
              bg="#aa1f30"
              mx="auto"
              mb={6}
              borderRadius="full"
            />
            <Text
              color="#aa1f30"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Building Excellence Since 2015
            </Text>
          </Box>

          {/* Description with Improved Readability */}
          <Box p={{ base: 3, md: 4 }}>
            <Text
              color="gray.700"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              lineHeight={{ base: "1.7", md: "1.8" }}
              textAlign="start"
              dangerouslySetInnerHTML={{
                __html:
                  sectionData?.description ||
                  "No description available. Please check back later for our company history.",
              }}
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CompanyHistory;
