"use client";

import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdCheckCircle } from "react-icons/md";
import {
  Box,
  Grid,
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
  AspectRatio,
  Image,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Loading from "@/components/Loading";
import { useState, useCallback } from "react";

interface TeamMember {
  _id?: string;
  title: string;
  description?: string;
  position?: string;
  bio?: string;
  qualifications?: string[];
  image?: {
    path: string;
    alt?: string;
  };
  name: string;
  no: number;
  social_links?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

// Modal Components
const CustomModalOverlay = ({ onClose }: { onClose: () => void }) => (
  <Box
    position="fixed"
    inset={0}
    bg="blackAlpha.800"
    backdropFilter="blur(12px)"
    zIndex={999}
    onClick={onClose}
  />
);

const CustomModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <>
      <CustomModalOverlay onClose={onClose} />
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="white"
        borderRadius="sm"
        overflowY={{ base: "auto", md: "hidden" }}
        overflowX={"hidden"}
        zIndex={10000}
        w={{ base: "100%", sm: "100%", md: "85%", lg: "78%", xl: "70%" }}
        maxW="1100px"
        maxH={{ base: "100vh", md: "92vh" }}
        boxShadow="2xl"
      >
        {children}
      </Box>
    </>
  );
};

const CustomModalCloseButton = ({ onClose }: { onClose: () => void }) => (
  <Box
    position="absolute"
    top={6}
    right={6}
    zIndex={1001}
    bg="white"
    borderRadius="full"
    p={3}
    cursor="pointer"
    boxShadow="lg"
    _hover={{ bg: "gray.100", transform: "scale(1.1)" }}
    transition="all 0.2s"
    onClick={onClose}
  >
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

const SocialIcon = ({
  icon,
  link,
  color,
}: {
  icon: any;
  link: string;
  color: string;
}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Icon
      as={icon}
      boxSize={7}
      color="gray.600"
      _hover={{ color, transform: "translateY(-4px) scale(1.1)" }}
      transition="all 0.3s ease"
    />
  </Link>
);

const TeamCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const {
    error,
    loading,
    sectionArray: TeamsData,
  } = useDefaultSectionArray("team") as {
    error: string | null;
    loading: boolean;
    sectionArray: TeamMember[];
  };

  const handleMemberClick = useCallback((member: TeamMember) => {
    setSelectedMember(member);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSelectedMember(null);
  }, []);

  if (loading) return <Loading />;
  if (error) {
    return (
      <Box textAlign="center" py={16} mx={MarginX}>
        <Text color="red.500" fontSize="lg">
          Error loading team members: {error}
        </Text>
      </Box>
    );
  }
  if (!TeamsData?.length) {
    return (
      <Box textAlign="center" py={16} mx={MarginX}>
        <Text color="gray.500" fontSize="lg">
          No team members found.
        </Text>
      </Box>
    );
  }

  return (
    <Box py={{ base: 12, md: 20 }} bg="white">
      <Box mx={MarginX}>
        {/* Header */}
        <VStack gap={5} mb={{ base: 12, md: 20 }} textAlign="center">
          <Badge
            colorScheme="red"
            fontSize="sm"
            px={6}
            py={2}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="semibold"
          >
            Our Team
          </Badge>

          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="gray.900"
            lineHeight="shorter"
          >
            Meet Our Experts
          </Heading>

          <Box w="90px" h="4px" bg="#aa1f30" mx="auto" borderRadius="full" />

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="3xl"
            mx="auto"
            lineHeight="tall"
          >
            A diverse team of professionals delivering audit, tax, advisory,
            outsourcing, and corporate finance solutions across Africa and
            beyond.
          </Text>
        </VStack>

        {/* Team Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 6, md: 8, lg: 10 }}
        >
          {TeamsData.sort((a, b) => (a.no || 0) - (b.no || 0)).map(
            (member, idx) => (
              <TeamMemberCard
                key={member._id ?? idx}
                member={member}
                onClick={() => handleMemberClick(member)}
              />
            ),
          )}
        </Grid>
      </Box>

      {/* Modal */}
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <CustomModalCloseButton onClose={handleClose} />

        {selectedMember && (
          <Flex
            direction={{ base: "column", md: "row" }}
            minH={{ md: "620px" }}
          >
            {/* Left Side - Image & Basic Info */}
            <Box
              flex={{ md: "1" }}
              bg="gray.50"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={
                  selectedMember.image?.path
                    ? `https://cms.jmassociates.co.ke/storage/uploads${selectedMember.image.path}`
                    : "/Home/about.jpeg"
                }
                alt={selectedMember.title || selectedMember.name}
                objectFit={{ base: "contain", md: "cover" }}
                w="100%"
                h={{ base: "500px", md: "95%" }}
              />

              {/* Overlay gradient */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                zIndex={10}
                h="50%"
                bgGradient="linear(to-b, #aa1f30, transparent)"
              />

              {/* Name & Position Overlay */}
              <VStack
                position="absolute"
                bottom={{ base: 15, md: 20 }}
                left={0}
                p={6}
                align="start"
                color="white"
                style={{
                  background: "linear-gradient(to right, #aa1f30, transparent)",
                }}
                w={"100%"}
                gap={1}
              >
                <Heading size="2xl" fontWeight="bold" lineHeight="shorter">
                  {selectedMember.title || selectedMember.name}
                </Heading>
                <Text fontSize="lg" fontWeight="medium" opacity={0.95}>
                  {selectedMember.position || selectedMember.description}
                </Text>
              </VStack>
            </Box>

            {/* Right Side - Content */}
            <Box
              flex={{ md: "1.1" }}
              p={{ base: 8, md: 12 }}
              overflowY="auto"
              maxH={{ base: "auto", md: "92vh" }}
            >
              <VStack align="stretch" gap={8}>
                {/* Bio */}
                <Box>
                  <Heading
                    size="3xl"
                    mb={4}
                    color="#aa1f30"
                    fontWeight={"extrabold"}
                  >
                    About {selectedMember.name.split(" ")[0]}
                  </Heading>
                  <Text color="gray.600" lineHeight="tall" fontSize="sm">
                    {selectedMember.bio ||
                      "No biography available at the moment."}
                  </Text>
                </Box>

                {/* Qualifications - Fixed TypeScript error */}
                {selectedMember.qualifications &&
                  Array.isArray(selectedMember.qualifications) &&
                  selectedMember.qualifications.length > 0 && (
                    <Box>
                      <Heading
                        size="md"
                        mb={5}
                        color="#aa1f30"
                        fontWeight={"bold"}
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        Qualifications
                      </Heading>
                      <Flex wrap="wrap" gap={3}>
                        {selectedMember.qualifications.map(
                          (qual: string, index: number) => (
                            <HStack
                              key={index}
                              bg="white"
                              border="2px solid #aa1f30"
                              borderRadius="xl"
                              px={5}
                              py={3}
                              shadow="sm"
                              gap={3}
                            >
                              <Icon
                                as={MdCheckCircle}
                                color="#aa1f30"
                                boxSize={5}
                              />
                              <Text
                                fontWeight="semibold"
                                color="gray.700"
                                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                              >
                                {qual}
                              </Text>
                            </HStack>
                          ),
                        )}
                      </Flex>
                    </Box>
                  )}

                <Link
                  href="/contact-us"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    colorScheme="red"
                    size="lg"
                    w="full"
                    mt={4}
                    height="56px"
                    fontSize="md"
                    fontWeight="bold"
                    bgColor={"#aa1f30"}
                    _hover={{ bg: "#000", transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                  >
                    Contact {selectedMember.name.split(" ")[0]}
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Flex>
        )}
      </CustomModal>
    </Box>
  );
};

// Improved Team Member Card
const TeamMemberCard = ({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: () => void;
}) => {
  return (
    <Box
      position="relative"
      borderRadius="3xl"
      overflow="hidden"
      bg="white"
      boxShadow="lg"
      cursor="pointer"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-12px)",
        boxShadow: "2xl",
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={
            member.image?.path
              ? `https://cms.jmassociates.co.ke/storage/uploads${member.image.path}`
              : "/Home/about.jpeg"
          }
          alt={member.title}
          objectFit="cover"
          height="100%"
          transition="transform 0.7s ease"
          _hover={{ transform: "scale(1.1)" }}
        />

        {/* Subtle overlay on hover */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to top, rgba(170,31,48,0.7), transparent)"
          opacity={0}
          _hover={{ opacity: 1 }}
          transition="opacity 0.4s ease"
        />
      </Box>

      <VStack gap={4} p={8} align="center" textAlign="center">
        <Heading as="h3" size="lg" fontWeight="bold" color="gray.900">
          {member.title || member.name}
        </Heading>

        <Text fontSize="md" color="#aa1f30" fontWeight="semibold">
          {member.position || member.description || "Team Member"}
        </Text>

        <Text color="gray.500" fontSize="sm" lineHeight="tall">
          {member.bio
            ? member.bio.slice(0, 110) + "..."
            : "Click to view full profile"}
        </Text>
      </VStack>
    </Box>
  );
};

export default TeamCard;
