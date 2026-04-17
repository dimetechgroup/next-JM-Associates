"use client";
import CommonHero from "@/components/common-hero";
import Loading from "@/components/Loading";

import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDownload, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const Careers = () => {
  const {
    sectionArray: CareersData,
    loading,
    error,
  } = useDefaultSectionArray("careers");

  if (loading) return <Loading />;

  if (error) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="red.500">
          Error: {error}
        </Text>
      </Box>
    );
  }

  return (
    <>
      <CommonHero 
        title="Careers" 
        image="/Home/career.jpg" 
        // subtitle="Join our team and be part of a dynamic firm committed to excellence"
      />

      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Box maxW="6xl" mx="auto" px={{ base: 6, md: 8 }}>
          {/* Header */}
          <VStack textAlign="center" mb={16}>
            <Badge
              colorScheme="red"
              px={6}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="700"
            >
              JOIN OUR TEAM
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4.5xl" }}
              fontWeight="700"
              color="gray.800"
              lineHeight="1.1"
            >
              Open Positions
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="560px">
              Explore exciting career opportunities at JM Associates. 
              We’re always looking for talented professionals to grow with us.
            </Text>
          </VStack>

          {CareersData.length > 0 ? (
            <VStack align="stretch">
              {CareersData.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    bg="white"
                    p={{ base: 8, md: 10 }}
                    borderRadius="2xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor="gray.100"
                    _hover={{ 
                      boxShadow: "xl", 
                      transform: "translateY(-4px)" 
                    }}
                    transition="all 0.3s ease"
                  >
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      justify="space-between"
                      align={{ base: "start", md: "center" }}
                      gap={6}
                    >
                      {/* Job Info */}
                      <Box flex="1">
                        <HStack mb={4}>
                          <FaBriefcase color="#aa1f30" size={22} />
                          <Heading as="h3" size="lg" color="gray.800">
                            {job.title}
                          </Heading>
                        </HStack>
                      </Box>

                      {/* Action Button */}
                      <Box>
                        <Link
                          href={`https://cms.jmassociates.co.ke/storage/uploads/${job.attachment?.path}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          passHref
                        >
                          <Button
                            // leftIcon={<FaDownload />}
                            size="lg"
                            bg="#aa1f30"
                            color="white"
                            px={10}
                            py={7}
                            fontWeight="700"
                            fontSize="md"
                            _hover={{
                              bg: "#8a1926",
                              transform: "translateY(-2px)",
                            }}
                            transition="all 0.3s"
                          >
                            View Job Details
                          </Button>
                        </Link>
                      </Box>
                    </Flex>

                    {job.description && (
                      <>
                        {/* <Divider my={8} /> */}
                        <Text color="gray.600" lineHeight="1.8">
                          {job.description}
                        </Text>
                      </>
                    )}
                  </Box>
                </motion.div>
              ))}
            </VStack>
          ) : (
            /* Empty State */
            <Box
              textAlign="center"
              py={20}
              bg="white"
              borderRadius="3xl"
              boxShadow="md"
            >
              <Box mx="auto" mb={8} w="120px" h="120px" bg="gray.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                <FaBriefcase size={50} color="#cbd5e0" />
              </Box>
              
              <Heading as="h2" size="xl" mb={4} color="gray.800">
                No Open Positions Right Now
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="480px" mx="auto">
                We currently don’t have any vacant positions. 
                Please check back later or send us your CV at{" "}
                <Text as="span" color="#aa1f30" fontWeight="600">
                  careers@jmassociates.co.ke
                </Text>
              </Text>

              <Button
                mt={10}
                variant="outline"
                colorScheme="red"
                size="lg"
                onClick={() => window.location.href = "mailto:careers@jmassociates.co.ke"}
              >
                Send Us Your CV
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Careers;