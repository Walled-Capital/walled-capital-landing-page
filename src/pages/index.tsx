import {
  Button,
  Flex,
  FlexProps,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ProjectBox } from "@src/components/project-box-main/project-box-v1/ProjectBox";
import { FC, PropsWithChildren } from "react";
import { ProjectBoxV2 } from "@src/components/project-box-main/project-box-v2/ProjectBoxV2";
import { ArticleCard } from "@src/components/article-card/ArticleCard";
import { icons, mockIcons } from "@src/data/mock";
import { messages } from "@src/data/messages";

const SectionLayout: FC<PropsWithChildren & FlexProps> = ({
  children,
  ...props
}) => (
  <Flex
    {...props}
    w="100%"
    p={{ xl: "40px", md: "30px", sm: "25px" }}
    borderRadius="20px"
    boxSizing="border-box"
  >
    {children}
  </Flex>
);

export default function Home() {
  return (
    <Flex
      w="100%"
      py="35px"
      px={{ xl: "245px", md: "40px", sm: "20px" }}
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={30} w="100%">
        <SectionLayout bgColor="#F3F4F6">
          <VStack spacing={{ sm: "20px", md: "40px" }} w="100%">
            <Heading
              w="100%"
              fontSize={{ md: "60px", sm: "42px" }}
              fontWeight="600"
              lineHeight="42px"
              textAlign="left"
              letterSpacing="-1px"
            >
              {messages.ON_CHAIN_PRIVATE_FUNDS}
            </Heading>
            <Text
              fontSize="17px"
              fontWeight="500"
              lineHeight="21px"
              textAlign="left"
              w="100%"
            >
              {messages.WALLED_CAPITAL_TITLE}
              <br />
              {messages.UNPARALLELED_PROTECTION}
            </Text>
            <Flex w="100%" flexDir="column">
              <Text
                fontSize="17px"
                fontWeight="500"
                lineHeight="21px"
                color="#919191"
                textAlign="left"
                pb="30px"
                w="100%"
              >
                Powered by the best:
              </Text>
              <Flex justifyContent="space-between">
                {[
                  ...icons,
                  "/mockicon.svg",
                  "/mockicon.svg",
                  "/mockicon.svg",
                ].map((src, index) => (
                  <Image key={index} src={src} alt={src} />
                ))}
              </Flex>
            </Flex>
            <Stack
              direction={{ md: "row", sm: "column" }}
              w="100%"
              alignItems="flex-start"
            >
              <ProjectBox
                accordionPanelRender={({ closeButton }) => (
                  <VStack spacing={4} align="stretch">
                    <Text
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {messages.TOKENISED_DIGITAL_ASSETS}
                      <Text as="span" fontWeight={700}>
                        enzyme.finance
                      </Text>{" "}
                      platform, providing real-time audible data and full
                      control over the assets.
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
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Management / Performance fees:</Flex>
                          <Flex fontWeight={700} textAlign="right">
                            2% / 20%
                          </Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Fund life term:</Flex>
                          <Flex fontWeight={700}>5 years</Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Soft-cap:</Flex>
                          <Flex fontWeight={700}>$1kk</Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
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
              <ProjectBox
                accordionPanelRender={({ closeButton }) => (
                  <VStack spacing={4} align="stretch">
                    <Text
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      A tokenised digital assets hedge fund with additional
                      low-risk yields from DeFis (no leverage and impermanent
                      loss). It&apos;s based on{" "}
                      <Text as="span" fontWeight={700}>
                        enzyme.finance
                      </Text>{" "}
                      platform, providing real-time audible data and full
                      control over the assets.
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
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Management / Performance fees:</Flex>
                          <Flex fontWeight={700}>2% / 20%</Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Fund life term:</Flex>
                          <Flex fontWeight={700}>5 years</Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
                          <Flex>Soft-cap:</Flex>
                          <Flex fontWeight={700}>$1kk</Flex>
                        </Flex>
                        <Flex
                          w="100%"
                          justifyContent="space-between"
                          fontSize="13px"
                        >
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
            </Stack>
          </VStack>
        </SectionLayout>
        <SectionLayout bgColor="#E5E7EB" flexDir="column">
          <Stack
            direction={["column", "row"]}
            spacing="40px"
            alignItems="flex-start"
          >
            <VStack
              spacing="30px"
              fontSize="17px"
              fontWeight={500}
              lineHeight="21px"
            >
              <Heading
                as="h2"
                fontSize={["48px", "40px"]}
                fontWeight={600}
                lineHeight="48px"
              >
                Exceptional Vision. Superior Practice.
              </Heading>
              <Text>{messages.WALLED_CAPITAL_DAO}</Text>
              <Text>{messages.AT_WALLED_CAPITAL_WE_RECOGNISE}</Text>
              <Text>{messages.TOGETHER_WE_WILL_REVOLUTIONIZE}</Text>
              <Flex
                alignItems="flex-start"
                w="100%"
                justifyContent={{ md: "normal", sm: "center" }}
              >
                <Button variant="black">contact us</Button>
              </Flex>
            </VStack>

            <Flex
              flexDir={["row", "column"]}
              minW="50%"
              h="100%"
              gap={["20px"]}
              flexWrap="wrap"
            >
              <Flex maxW={{ xl: "100%", md: "48.5%", sm: "88%" }}>
                <ProjectBoxV2
                  iconSrc="/arrowInEllipse.svg"
                  title="DAO Advantages"
                  description={messages.WE_BELIEVE_IN_THE_POTENTIAL_OF}
                  accordionPanelRender={() => (
                    <Flex flexDir="column" px="30px" pb="30px">
                      <OrderedList>
                        <ListItem>
                          <b>Decentralization & Transparency:</b>{" "}
                          {messages.REAL_TIME_VERIFIABLE_INFORMATION}
                        </ListItem>
                        <ListItem>
                          <b>Asset Control & Innovation:</b>{" "}
                          {messages.THE_DAO_EMPHASIZES_SELF_CUSTODY}
                        </ListItem>
                      </OrderedList>
                    </Flex>
                  )}
                />
              </Flex>
              <Flex maxW={{ xl: "100%", md: "48.5%", sm: "88%" }}>
                <ProjectBoxV2
                  iconSrc="/arrowInEllipse.svg"
                  title="Innovative Enzyme Finance"
                  description={messages.ENZYME_FINANCE_IS_TRANSFORMING}
                  accordionPanelRender={() => (
                    <Flex flexDir="column" px="30px" pb="30px">
                      <Text mb="30px">
                        {messages.BY_UTILIZING_SMART_CONTRACTS}
                      </Text>
                      <Text>{messages.ENZYME_FINANCES_FOCUS_ON_SECURITY}</Text>
                    </Flex>
                  )}
                />
              </Flex>
              <Flex maxW={{ xl: "100%", md: "48.5%", sm: "88%" }}>
                <ProjectBoxV2
                  iconSrc="/arrowInEllipse.svg"
                  title="Security"
                  description={
                    messages.IN_THE_DIGITAL_ASSETS_INDUSTRY + "<br/><br/>"
                  }
                  accordionPanelRender={() => (
                    <VStack px="30px" flexDir="column" spacing={30}>
                      <Text>
                        {messages.WE_SELECT_PLATFORMS_AND_TECHNOLOGIES}
                      </Text>
                      <Text>{messages.BY_CONTINUOUSLY_MONITORING}</Text>
                    </VStack>
                  )}
                  imagesSrc={icons}
                />
              </Flex>
              <Flex maxW={{ xl: "100%", md: "48.5%", sm: "88%" }}>
                <ProjectBoxV2
                  iconSrc="/arrowInEllipse.svg"
                  title="Partnerships"
                  description={messages.AT_WALLED_CAPITAL_DAO}
                  accordionPanelRender={() => (
                    <VStack px="30px" flexDir="column" spacing={30}>
                      <Text>{messages.OUR_NETWORK_OF_PARTNERS}</Text>
                    </VStack>
                  )}
                  imagesSrc={mockIcons}
                />
              </Flex>
            </Flex>
          </Stack>
        </SectionLayout>
        <SectionLayout bgColor="#E5E7EB">
          <Stack spacing="30px" alignItems="flex-start" w="100%">
            <Heading fontSize="40px" fontWeight={600} lineHeight="48px">
              Updates & News
            </Heading>
            <Flex
              justifyContent="space-between"
              w="100%"
              flexDir={{ md: "row", sm: "column" }}
              gap='10px'
            >
              <ArticleCard imageSrs="/mockImageGreen.svg" />
              <ArticleCard imageSrs="/mockImageRed.svg" />
              <ArticleCard imageSrs="/mockImagePurple.svg" />
            </Flex>
          </Stack>
        </SectionLayout>
      </VStack>
    </Flex>
  );
}


