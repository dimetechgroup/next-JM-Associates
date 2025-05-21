"use client";
import { CareersData } from "@/utils/constants";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  id:string
    }

const CareerDetail = ({id}:Props) => {
  // Find the job data based on the jobId
  let jobData = CareersData.find((job) => job.id === Number(id));

  return (
    <Container maxW="3xl" py={10}>
      <VStack gap={8} align="start">
        {/* job title */}
        <Heading size="xl">{jobData?.title}</Heading>
        <Box w="full">
          <Heading size="md" mb={2}>
            Requirements
          </Heading>
          <Text>
            - Proven experience in web development.
            <br />- Strong understanding of React and Next.js.
            <br />- Familiarity with Chakra UI is a plus.
          </Text>
        </Box>

        <Box w="full">
          <Heading size="md" mb={2}>
            Qualifications
          </Heading>
          <Text>
            - Bachelor's degree in Computer Science or related field.
            <br />- Excellent communication skills.
            <br />- Ability to work independently and as part of a team.
          </Text>
        </Box>

        <Box w="full" textAlign="center">
          <Button colorScheme="teal" size="lg">
            Apply Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default CareerDetail;
