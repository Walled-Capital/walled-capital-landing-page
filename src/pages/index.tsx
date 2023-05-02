import { ProjectBox } from "@src/components/project-box/ProjectBox";
import { Flex, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <ProjectBox
        accordionPanelRender={({ closeButton }) => (
          <VStack spacing={4} align="stretch">
            <Text
              sx={{
                fontSize: "13px",
              }}
            >
              A tokenised digital assets hedge fund with additional low-risk
              yields from DeFis (no leverage and impermanent loss). It&apos;s
              based on{" "}
              <Text as="span" fontWeight={700}>
                enzyme.finance
              </Text>{" "}
              platform, providing real-time audible data and full control over
              the assets.
            </Text>
            <Flex
              sx={{
                p: "15px",
                border: "1px solid white",
                borderRadius: "20px",
                mb: "10px",
                w: "100%",
              }}
            >
              <VStack spacing={1} align="stretch" w="100%">
                <Flex w="100%" justifyContent="space-between" fontSize="13px">
                  <Flex>Management / Performance fees:</Flex>
                  <Flex fontWeight={700}>2% / 20%</Flex>
                </Flex>
                <Flex w="100%" justifyContent="space-between" fontSize="13px">
                  <Flex>Fund life term:</Flex>
                  <Flex fontWeight={700}>5 years</Flex>
                </Flex>
                <Flex w="100%" justifyContent="space-between" fontSize="13px">
                  <Flex>Soft-cap:</Flex>
                  <Flex fontWeight={700}>$1kk</Flex>
                </Flex>
                <Flex w="100%" justifyContent="space-between" fontSize="13px">
                  <Flex>Hard-cap:</Flex>
                  <Flex fontWeight={700}>$10kk</Flex>
                </Flex>
              </VStack>
            </Flex>
            <Flex justifyContent="space-between">
              <Flex fontSize="12px" flexDir="column">
                <Text
                  as="i"
                  textTransform="uppercase"
                  fontWeight={700}
                  lineHeight="10px"
                >
                  The fund launch:
                </Text>
                <Text as="i">beginning of May 2023</Text>
              </Flex>
              {closeButton}
            </Flex>
          </VStack>
        )}
      />
    </>
  );
}
