"use client";

import { contactsData, MarginX } from "@/utils/constants";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "./contact-form";

const ContactDetails = () => {
  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50">
      <Box maxW="full" mx="auto" px={MarginX}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 12, lg: 16 }}
          alignItems="start"
        >
          {/* Contact Information Section */}
          <VStack align="stretch" gap={10}>
            <Box>
              <Heading
                fontSize={{ base: "2.8xl", md: "3.5xl" }}
                fontWeight="700"
                color="gray.800"
                mb={3}
              >
                Get In Touch
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="480px">
                Have a question or want to discuss a project? Reach out to us
                directly through any of the channels below.
              </Text>
            </Box>

            <VStack align="stretch" gap={6}>
              {contactsData.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    href={contact.link}
                    target={
                      contact.link.startsWith("http") ? "_blank" : undefined
                    }
                  >
                    <Flex
                      p={{ base: 7, md: 8 }}
                      borderRadius="2xl"
                      bg="white"
                      boxShadow="md"
                      border="1px solid"
                      borderColor="gray.100"
                      align="center"
                      gap={6}
                      _hover={{
                        boxShadow: "xl",
                        borderColor: "#aa1f30",
                        transform: "translateY(-4px)",
                      }}
                      transition="all 0.3s ease"
                    >
                      {/* Icon Circle */}
                      <Box
                        p={4}
                        bg={contact.bg || "#aa1f30"}
                        color={contact.color || "white"}
                        borderRadius="full"
                        flexShrink={0}
                      >
                        <Icon boxSize={8}>{contact.icon}</Icon>
                      </Box>

                      {/* Text Content */}
                      <Box flex="1">
                        <Heading
                          as="h3"
                          fontSize="xl"
                          fontWeight="600"
                          color="gray.800"
                          mb={1}
                        >
                          {contact.title}
                        </Heading>
                        <Text
                          fontSize="lg"
                          color="gray.600"
                          _hover={{ color: "#aa1f30" }}
                          transition="color 0.2s"
                        >
                          {contact.label}
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                </motion.div>
              ))}
            </VStack>
          </VStack>

          {/* Contact Form */}
          <Box>
            <ContactForm />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ContactDetails;
