"use client";
import CommonHero from "@/components/common-hero";
import Loading from "@/components/Loading";

import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const CareersPage = () => {
  const {
    sectionArray: CareersData,
    loading,
    error,
  } = useDefaultSectionArray("careers");
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }
  if (!CareersData.length) {
    return (
      <Box>
        <CommonHero title="Careers" image="/Home/career.jpg" />
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="2xl" mb={6} color="teal.500">
            No Open Positions
          </Heading>
          <Text fontSize="lg" color="gray.600">
            We currently have no vacant positions available. Please check back
            later.
          </Text>
        </Box>
      </Box>
    );
  }
  return (
    <>
      <CommonHero title="Careers" image="/Home/career.jpg" />
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="2xl" mb={6} color="teal.500">
          Open Positions
        </Heading>
        {CareersData.length > 0 ? (
          <VStack gap={6}>
            {CareersData.map((job) => (
              <Box
                key={job._id}
                p={5}
                borderRadius="md"
                boxShadow="md"
                w="full"
                maxW="600px"
              >
                <Heading as="h3" size="lg" color="gray.700">
                  {job.title}
                </Heading>
                <Text fontSize="md" color="gray.500" mt={2}>
                  {job.location}
                </Text>
                <NextLink
                  href={`https://cms.jmassociates.co.ke/storage/uploads/${job.attachment?.path}`}
                  passHref
                >
                  <Button mt={4} colorScheme="teal">
                    View Details
                  </Button>
                </NextLink>
              </Box>
            ))}
          </VStack>
        ) : (
          <Text fontSize="lg" color="gray.600">
            We currently have no vacant positions available. Please check back
            later.
          </Text>
        )}
      </Box>
    </>
  );
};

export default CareersPage;
