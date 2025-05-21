"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
id:string
  }

const InsightDetail = ({id}:Props) => {


  const {
    error: insightError,
    loading: insightLoading,
    sectionData: sectionData,
  } = useDefaultSectionData(`insights/${id}`);

  if (insightLoading) {
    return <Loading />;
  }
  if (insightError) {
    return <Text>Error: {insightError}</Text>;
  }

  return (
    <>
      <Box p={8} marginX={MarginX}>
        <Box mb={4} justifyContent={"center"} display="flex">
          <Image
            src={
              sectionData!.image
                ? `https://cms.jmassociates.co.ke/storage/uploads${
                    sectionData!.image.path
                  }`
                : "/Home/about.jpeg"
            }
            alt={sectionData!.title}
            objectFit="cover"
            width="75%"
            height="450px"
            mb={4}
          />
        </Box>

        <Heading as="h1" fontSize="3xl" mb={4} textAlign="center">
          {sectionData!.title}
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          {sectionData!.start_date}
        </Text>
        <Text
          fontSize="md"
          lineHeight={1.8}
          color="gray.700"
          dangerouslySetInnerHTML={{ __html: sectionData!.description || "" }}
        />
        <Box mt={8} textAlign="center">
          <a
            href={`https://cms.jmassociates.co.ke/storage/uploads${
              sectionData!.document.path ?? ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#3182CE",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Download PDF
          </a>
        </Box>
      </Box>
    </>
  );
};

export default InsightDetail;
