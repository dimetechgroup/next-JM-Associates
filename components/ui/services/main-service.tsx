"use client";

import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";

const MainService = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("tab");

  const {
    error,
    loading,
    sectionArray: serviceData,
  } = useDefaultSectionArray("services");

  const [activeTab, setActiveTab] = useState<any>(null);

  // This is supposed to be like this
  useEffect(() => {
    if (serviceData && serviceData.length > 0) {
      const matched = serviceData.find((tab: any) => tab._id === serviceId);
      setActiveTab(matched || serviceData[0]);
    }
  }, [serviceData, serviceId]);

  if (loading) return <Loading />;
  if (error) return <Text color="red.500">Error: {error}</Text>;
  if (!serviceData || serviceData.length === 0) {
    return <Text>No services available</Text>;
  }
  if (!activeTab) return null;

  return (
    <Box as="main" py={{ base: 12, md: 16 }} bg="gray.50">
      <Box mx={MarginX} maxW="1400px">
        {/* Header */}
        <VStack textAlign="center" mb={12} gap={4}>
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="2px"
            color="#aa1f30"
          >
            WHAT WE OFFER
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4.5xl" }}
            fontWeight="700"
            color="gray.800"
          >
            Our Professional Services
          </Heading>
          <Text maxW="680px" fontSize="lg" color="gray.600">
            Expert solutions tailored to your business needs. From audit and tax
            to strategic consulting and financial advisory.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", lg: "340px 1fr" }}
          gap={{ base: 8, lg: 12 }}
        >
          {/* Sidebar Navigation */}
          <GridItem>
            <Box
              bg="white"
              p={6}
              borderRadius="2xl"
              boxShadow="sm"
              position="sticky"
              top="100px"
            >
              <Text
                fontSize="lg"
                fontWeight="600"
                mb={6}
                color="gray.800"
                borderBottom="2px solid #aa1f30"
                pb={3}
              >
                Services
              </Text>

              <VStack align="stretch" gap={2}>
                {serviceData.map((service: any) => (
                  <Button
                    key={service._id}
                    variant="ghost"
                    justifyContent="flex-start"
                    py={4}
                    px={5}
                    fontWeight={activeTab._id === service._id ? "700" : "500"}
                    bg={
                      activeTab._id === service._id ? "#aa1f30" : "transparent"
                    }
                    color={activeTab._id === service._id ? "white" : "gray.700"}
                    _hover={{
                      bg:
                        activeTab._id === service._id ? "#aa1f30" : "gray.100",
                    }}
                    onClick={() => setActiveTab(service)}
                    borderRadius="lg"
                    transition="all 0.2s"
                  >
                    {service.title}
                  </Button>
                ))}
              </VStack>
            </Box>
          </GridItem>

          {/* Main Content Area */}
          <GridItem>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  bg="white"
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  {/* Hero Image */}
                  <Box>
                    <Image
                      src={
                        activeTab.image
                          ? `https://cms.jmassociates.co.ke/storage/uploads${activeTab.image.path}`
                          : "/Home/about.jpeg"
                      }
                      alt={activeTab.title}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      sizes="cover"
                    />
                    <Box bg="linear-gradient(to top, rgba(0,0,0,0.75), transparent)" />

                    <Box mt={10} py={{ base: "lg" }} w={"full"}>
                      <Heading
                        as="h2"
                        size="3xl"
                        color="#aa1f30"
                        fontWeight="900"
                        textShadow={"xl"}
                        lineHeight="1.1"
                        px={"50px"}
                      >
                        {activeTab.title}
                      </Heading>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Box p={{ base: 8, md: 12 }}>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      lineHeight="1.85"
                      color="gray.700"
                      dangerouslySetInnerHTML={{
                        __html: (activeTab.description ?? "").replace(
                          /\n/g,
                          "<br /><br />",
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainService;
