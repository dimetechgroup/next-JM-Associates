// components/home/Loading.tsx
"use client";

import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="white"
      zIndex={9999}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack gap={8} align="center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/Logo.png"
            alt="JM Associates"
            width={180}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        {/* Professional Loading Animation */}
        <Flex direction="column" align="center" gap={6}>
          <Box position="relative" width="80px" height="80px">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: "80px",
                height: "80px",
                border: "4px solid #e2e8f0",
                borderTop: "4px solid #aa1f30",
                borderRadius: "50%",
              }}
            />

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "56px",
                height: "56px",
                border: "3px solid #e2e8f0",
                borderTop: "3px solid #aa1f30",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Text
              fontSize="sm"
              fontWeight="500"
              color="gray.600"
              letterSpacing="2px"
            >
              LOADING...
            </Text>
          </motion.div>
        </Flex>

        {/* Subtle tagline */}
        <Text fontSize="xs" color="gray.500" mt={2} opacity={0.8}>
          JM Associates • Excellence in Professional Services
        </Text>
      </VStack>
    </Box>
  );
};

export default Loading;
