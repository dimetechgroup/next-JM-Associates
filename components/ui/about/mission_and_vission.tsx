"use client";

import { MarginX } from "@/utils/constants";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaAward,
  FaRegFileAlt,
  FaRegSmile,
  FaUserFriends,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: FaAward,
    endValue: 10,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    icon: FaRegFileAlt,
    endValue: 1240,
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    icon: FaRegSmile,
    endValue: 2187,
    suffix: "+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: FaUserFriends,
    endValue: 98,
    suffix: "%",
    label: "CLIENT SATISFACTION",
  },
];

const CompanyOverview = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.endValue;
            const duration = 1800; // smooth 1.8 seconds
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = end / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters((prev) => {
                  const updated = [...prev];
                  updated[index] = end;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounters((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(start);
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <Box ref={sectionRef} bg="gray.50" py={{ base: 16, md: 20 }}>
      <Container maxW="7xl" mx="auto" px={MarginX}>
        {/* Header */}
        <VStack textAlign="center" mb={16} gap={5}>
          <Box w="70px" h="3px" bg="#aa1f30" borderRadius="full" mx="auto" />

          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="700"
            letterSpacing="-0.02em"
            color="gray.900"
          >
            Our Journey in Numbers
          </Heading>

          <Text fontSize="lg" color="gray.600" maxW="lg" mx="auto">
            A decade of trust, excellence, and delivering exceptional value to
            our clients.
          </Text>
        </VStack>

        {/* Stats Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: 8, lg: 10 }}
        >
          {stats.map((stat, index) => (
            <VStack
              key={index}
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.100"
              gap={6}
              textAlign="center"
              transition="all 0.4s ease"
              _hover={{
                boxShadow: "md",
                borderColor: "#aa1f30",
                transform: "translateY(-6px)",
              }}
            >
              <Icon
                as={stat.icon}
                boxSize={11}
                color="#aa1f30"
                opacity={0.85}
              />

              <VStack gap={1}>
                <HStack align="baseline" gap={1}>
                  <Text
                    fontSize={{ base: "xl", md: "3xl" }}
                    fontWeight="700" // Reduced weight as requested
                    color="gray.900"
                    lineHeight="1"
                    letterSpacing="-0.03em"
                  >
                    {counters[index].toLocaleString()}
                  </Text>
                  {stat.suffix && (
                    <Text fontSize="3xl" fontWeight="600" color="#aa1f30">
                      {stat.suffix}
                    </Text>
                  )}
                </HStack>

                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="gray.600"
                  letterSpacing="0.5px"
                  textTransform="uppercase"
                >
                  {stat.label}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Mission, Vision & Values */}
        <VStack mt={20} gap={12}>
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="700"
            color="gray.900"
          >
            Our Commitment
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
            {/* Mission */}
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="2px solid #aa1f30"
            >
              <Text fontSize="lg" fontWeight="700" color="#aa1f30" mb={4}>
                OUR MISSION
              </Text>
              <Text lineHeight="1.8" color="gray.700">
                To be a brand that delivers quality service to our clients and
                value to our employees and stakeholders.
              </Text>
            </Box>

            {/* Vision - Highlighted */}
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="2px solid #aa1f30"
            >
              <Text fontSize="lg" fontWeight="700" color="#aa1f30" mb={4}>
                OUR VISION
              </Text>
              <Text lineHeight="1.8" color="gray.700">
                To be the preferred innovative audit and assurance, tax, and
                advisory firm in Africa.
              </Text>
            </Box>

            {/* Core Values */}
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="2px solid #aa1f30"
            >
              <Text fontSize="lg" fontWeight="700" color="#aa1f30" mb={4}>
                OUR CORE VALUES
              </Text>
              <Text lineHeight="1.8" color="gray.700">
                To ensure relevance, quality, and effectiveness in each
                assignment, we embrace four fundamental principles in our
                service delivery.
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CompanyOverview;
