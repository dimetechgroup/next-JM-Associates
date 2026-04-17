"use client";

import { HomeLinks, MarginX } from "@/utils/constants";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TopNav from "./top-nav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Sticky Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={1100}
        bg="white"
        borderBottom="1px solid"
        borderColor={scrolled ? "rgba(170,31,48,0.15)" : "transparent"}
        boxShadow={scrolled ? "0 4px 20px rgba(170,31,48,0.08)" : "none"}
        transition="all 0.3s ease"
      >
        <TopNav />

        <Flex
          mx={MarginX}
          py={{ base: 4, md: 5 }}
          px={{base: 4, md: 6}}
          align="center"
          justify="space-between"
          gap={6}
        >
          {/* Logos - Same size from tablet and up */}
          <HStack gap={{ base: 3, md: 5 }} align="center">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/Logo.png"
                  alt="JM Associates"
                  width={125}
                  height={78}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            </Link>

            <Link href="/">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/Antea.png"
                  alt="Antea"
                  width={110}
                  height={72}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            </Link>
          </HStack>

          {/* Desktop Navigation */}
          <HStack
            display={{ base: "none", xl: "flex" }}
            gap={6}
            fontSize="13px"
            fontWeight="500"
          >
            {HomeLinks.map((link) => {
              const isActive =
                pathname === link.link ||
                (link.link === "/" && pathname === "/");

              return (
                <Link key={link.link} href={link.link} style={{ position: "relative" }}>
                  <Box
                    as="span"
                    color={isActive ? "#aa1f30" : "#1c1c1c"}
                    fontWeight={isActive ? "700" : "500"}
                    position="relative"
                    pb={2}
                    _hover={{ color: "#aa1f30" }}
                    transition="color 0.25s ease"
                  >
                    {link.text}

                    {/* Active Underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "85%" : "0%" }}
                      whileHover={{ width: "85%" }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "2.5px",
                        backgroundColor: "#aa1f30",
                        borderRadius: "2px",
                      }}
                    />
                  </Box>
                </Link>
              );
            })}
          </HStack>

          {/* CTA Button + Hamburger */}
          <Flex align="center" gap={5}>
            {/* GET A FREE QUOTE - Hidden on mobile (phones), visible on tablet & desktop */}
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/#quote">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    bg="#aa1f30"
                    color="white"
                    px={{ base: 8, lg: 10 }}
                    py={6}
                    fontWeight="700"
                    letterSpacing="0.6px"
                    fontSize="13.5px"
                    _hover={{ bg: "#8a1926" }}
                    boxShadow="md"
                  >
                    GET A QUOTE
                  </Button>
                </motion.div>
              </Link>
            </Box>

            {/* Mobile Hamburger - Only visible on phones */}
            <Box display={{ base: "block", xl: "none" }}>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsOpen(true)}
                style={{
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e2e2e2",
                  borderRadius: "8px",
                  background: "white",
                }}
              >
                <RxHamburgerMenu size={26} color="#aa1f30" />
              </motion.button>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Drawer / Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
                zIndex: 1200,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 88vw)",
                background: "white",
                zIndex: 1300,
                boxShadow: "-15px 0 50px rgba(0,0,0,0.2)",
              }}
            >
              <Flex
                px={6}
                py={6}
                align="center"
                justify="space-between"
                borderBottom="1px solid #f1f1f1"
              >
                <Text fontSize="22px" fontWeight="700" color="#1a1a1a">
                  Menu
                </Text>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setIsOpen(false)}
                >
                  <IoCloseOutline size={32} color="#333" />
                </motion.button>
              </Flex>

              <VStack align="stretch" px={6} py={10} gap={3}>
                {HomeLinks.map((link) => {
                  const isActive =
                    pathname === link.link ||
                    (link.link === "/" && pathname === "/");

                  return (
                    <Link
                      key={link.link}
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                    >
                      <Box
                        py={5}
                        px={6}
                        borderRadius="xl"
                        bg={isActive ? "#aa1f30" : "transparent"}
                        color={isActive ? "white" : "gray.800"}
                        fontWeight={isActive ? "700" : "600"}
                        fontSize="17px"
                        _hover={{
                          bg: isActive ? "#aa1f30" : "gray.100",
                        }}
                        transition="all 0.2s"
                      >
                        {link.text}
                      </Box>
                    </Link>
                  );
                })}
              </VStack>

              {/* Quote Button INSIDE Sidebar - Always visible in mobile menu */}
              <Box px={6} pb={10}>
                <Link href="/#quote" onClick={() => setIsOpen(false)}>
                  <Button
                    w="full"
                    bg="#aa1f30"
                    color="white"
                    size="lg"
                    py={7}
                    fontWeight="700"
                    _hover={{ bg: "#8a1926" }}
                  >
                    GET A QUOTE
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;