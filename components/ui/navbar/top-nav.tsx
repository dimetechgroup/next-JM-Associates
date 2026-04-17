"use client";

import { MarginX, socialIcons } from "@/utils/constants";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  IconButton,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { useState } from "react";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Box bg="gray.100" borderBottom="1px solid" borderColor="gray.200">
      <Flex mx={MarginX} py={3} justify="space-between" align="center">
        {/* Desktop Version */}
        <Flex
          display={{ base: "none", md: "flex" }}
          w="full"
          justify="space-between"
          align="center"
          gap={6}
        >
          {/* Contact Info */}
          <HStack gap={6}>
            <HStack gap={2}>
              <Icon as={FiMapPin} boxSize={4} color="#aa1f30" />
              <Text fontSize="xs" color="gray.600">
                8th Floor, West Park Towers, Mpesi Lane
              </Text>
            </HStack>

            <HStack gap={2}>
              <Icon as={FiPhone} boxSize={4} color="#aa1f30" />
              <Link href="tel:+254733818835">
                <Text
                  fontSize="xs"
                  color="gray.600"
                  _hover={{ color: "#aa1f30" }}
                  transition="color 0.2s"
                >
                  +254 733 818 835
                </Text>
              </Link>
            </HStack>
          </HStack>

          {/* Opening Hours */}
          <HStack gap={2}>
            <Icon as={FiClock} boxSize={4} color="#aa1f30" />
            <Text fontSize="xs" color="gray.600">
              Mon–Sat 8:00 AM – 6:00 PM • Sunday Closed
            </Text>
          </HStack>

          {/* Social Icons */}
          <HStack gap={4}>
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                aria-label={`Social ${index}`}
              >
                <Icon
                  as={item.icon}
                  boxSize={5}
                  color={item.color || "gray.600"}
                  _hover={{ color: "#aa1f30", transform: "translateY(-2px)" }}
                  transition="all 0.25s ease"
                />
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Mobile Version */}
        <Flex
          display={{ base: "flex", md: "none" }}
          w="full"
          justify="space-between"
          align="center"
        >
          <HStack gap={3}>
            <Icon as={FiMapPin} boxSize={4} color="#aa1f30" />
            <Text fontSize="xs" color="gray.600">
              8th Floor, West Park Towers, Mpesi Lane
            </Text>
          </HStack>

          <Button
            aria-label="Toggle menu"
            variant="ghost"
            size="sm"
            onClick={toggleDropdown}
            color="#aa1f30"
          >
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </Button>
        </Flex>

        {/* Custom Mobile Dropdown */}
        {isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            bg="white"
            mx={MarginX}
            mt={3}
            mb={4}
            p={5}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            width="calc(100% - 32px)"
          >
            <VStack align="stretch" gap={5}>
              {/* Phone */}
              <HStack gap={3}>
                <Icon as={FiPhone} boxSize={5} color="#aa1f30" />
                <Link href="tel:+254733818835">
                  <Text
                    fontSize="sm"
                    color="gray.700"
                    _hover={{ color: "#aa1f30" }}
                  >
                    +254 733 818 835
                  </Text>
                </Link>
              </HStack>

              {/* Full Address */}
              <HStack gap={3}>
                <Icon as={FiMapPin} boxSize={5} color="#aa1f30" />
                <Text fontSize="sm" color="gray.600">
                  8th Floor, West Park Towers, Mpesi Lane, Nairobi
                </Text>
              </HStack>

              {/* Opening Hours */}
              <HStack gap={3}>
                <Icon as={FiClock} boxSize={5} color="#aa1f30" />
                <Text fontSize="sm" color="gray.600">
                  Mon–Sat 8:00 AM – 6:00 PM • Sunday Closed
                </Text>
              </HStack>

              {/* Social Icons */}
              <HStack
                gap={6}
                pt={3}
                borderTop="1px solid"
                borderColor="gray.100"
              >
                {socialIcons.map((item, index) => (
                  <Link key={index} href={item.link} target="_blank">
                    <Icon
                      as={item.icon}
                      boxSize={6}
                      color={item.color || "gray.600"}
                      _hover={{ color: "#aa1f30", transform: "scale(1.15)" }}
                      transition="all 0.2s"
                    />
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default TopNav;
