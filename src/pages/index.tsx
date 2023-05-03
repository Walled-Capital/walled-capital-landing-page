import {
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Image,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ProjectBox } from "@src/components/project-box-main/project-box-v1/ProjectBox";
import { FC, PropsWithChildren } from "react";
import { ProjectBoxV2 } from "@src/components/project-box-main/project-box-v2/ProjectBoxV2";

const icons = [
  "/Gnosis.svg",
  "/Aragon.svg",
  "/Miltis.svg",
  "/Enzyme.svg",
  "/Ledger.svg",
];

const SectionLayout: FC<PropsWithChildren & FlexProps> = ({
  children,
  ...props
}) => (
  <Flex {...props} w="100%" p="40px" borderRadius="20px">
    {children}
  </Flex>
);

export default function Home() {
  return (
    <Flex
      w="100%"
      py="35px"
      px="215px"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={30} w="100%">
        <SectionLayout bgColor="#F3F4F6">
          <VStack spacing="40px" w="100%">
            <Heading
              w="100%"
              fontSize="60px"
              fontWeight="600"
              lineHeight="72px"
              textAlign="left"
            >
              On-chain Private Funds
            </Heading>
            <Text
              fontSize="17px"
              fontWeight="500"
              lineHeight="21px"
              textAlign="left"
              w="100%"
            >
              Walled Capital. A capital walled by chains, on-chains.
              <br />
              Unparalleled protection and growth opportunities for your digital
              wealth.
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
                {icons.map((src, index) => (
                  <Image key={index} src={src} alt={src} />
                ))}
              </Flex>
            </Flex>
            <HStack w="100%" alignItems="flex-start">
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
            </HStack>
          </VStack>
        </SectionLayout>
        <SectionLayout bgColor="#E5E7EB">
          <HStack spacing="40px" alignItems="flex-start">
            <VStack
              spacing="30px"
              fontSize="17px"
              fontWeight={500}
              lineHeight="21px"
            >
              <Heading
                as="h2"
                fontSize="40px"
                fontWeight={600}
                lineHeight="48px"
              >
                Exceptional Vision. Superior Practice.
              </Heading>
              <Text>
                Welcome to Walled Capital DAO, a community of forward-thinking
                business professionals who forging a new paradigm of venture
                communities, developing innovative investment products, and
                assembling a wealth of expertise for the astute evaluation of
                digital assets.
              </Text>
              <Text>
                At Walled Capital, we recognise the transformative potential of
                digital assets and are committed to staying at the forefront of
                this exciting new era. As a member of our community, you will be
                part of a global network of like-minded individuals who share
                your passion for innovation and excellence.
              </Text>
              <Text>
                Together, we will revolutionize the way we invest and unlock the
                full potential of the digital assets landscape.
              </Text>
              <Button>contact us</Button>
            </VStack>

            <VStack minW="50%" spacing="20px">
              <ProjectBoxV2
                iconSrc="/arrowInEllipse.svg"
                title="DAO Advantages"
                description="We believe in the potential of digital assets and seeks an
            organisational model that supports our values. A Decentralized
            Autonomous Organization (DAO) provides the perfect framework for us,
            and here's why:"
                accordionPanelRender={() => (
                  <Flex flexDir="column" px="30px" pb="30px">
                    <OrderedList>
                      <ListItem>
                        <b>Decentralization & Transparency:</b> Real-time,
                        verifiable information is available, with a focus on
                        on-chain activities, which eliminates the need for
                        audits and reduces operational costs.
                      </ListItem>
                      <ListItem>
                        <b>Asset Control & Innovation:</b> The DAO emphasizes
                        self-custody, allowing members to retain direct control
                        over their assets. This model fosters innovation by
                        utilizing smart contracts and decentralized applications
                        (dApps) to automate processes and develop efficient
                        investment products.
                      </ListItem>
                    </OrderedList>
                  </Flex>
                )}
              />
              <ProjectBoxV2
                iconSrc="/arrowInEllipse.svg"
                title="DAO Advantages"
                description="We believe in the potential of digital assets and seeks an
            organisational model that supports our values. A Decentralized
            Autonomous Organization (DAO) provides the perfect framework for us,
            and here's why:"
                accordionPanelRender={() => (
                  <Flex flexDir="column" px="30px" pb="30px">
                    <OrderedList>
                      <ListItem>
                        <b>Decentralization & Transparency:</b> Real-time,
                        verifiable information is available, with a focus on
                        on-chain activities, which eliminates the need for
                        audits and reduces operational costs.
                      </ListItem>
                      <ListItem>
                        <b>Asset Control & Innovation:</b> The DAO emphasizes
                        self-custody, allowing members to retain direct control
                        over their assets. This model fosters innovation by
                        utilizing smart contracts and decentralized applications
                        (dApps) to automate processes and develop efficient
                        investment products.
                      </ListItem>
                    </OrderedList>
                  </Flex>
                )}
              />
              <ProjectBoxV2
                iconSrc="/arrowInEllipse.svg"
                title="DAO Advantages"
                description="We believe in the potential of digital assets and seeks an
            organisational model that supports our values. A Decentralized
            Autonomous Organization (DAO) provides the perfect framework for us,
            and here's why:"
                accordionPanelRender={() => (
                  <Flex flexDir="column" px="30px" pb="30px">
                    <OrderedList>
                      <ListItem>
                        <b>Decentralization & Transparency:</b> Real-time,
                        verifiable information is available, with a focus on
                        on-chain activities, which eliminates the need for
                        audits and reduces operational costs.
                      </ListItem>
                      <ListItem>
                        <b>Asset Control & Innovation:</b> The DAO emphasizes
                        self-custody, allowing members to retain direct control
                        over their assets. This model fosters innovation by
                        utilizing smart contracts and decentralized applications
                        (dApps) to automate processes and develop efficient
                        investment products.
                      </ListItem>
                    </OrderedList>
                  </Flex>
                )}
              />
              <ProjectBoxV2
                iconSrc="/arrowInEllipse.svg"
                title="DAO Advantages"
                description="We believe in the potential of digital assets and seeks an
            organisational model that supports our values. A Decentralized
            Autonomous Organization (DAO) provides the perfect framework for us,
            and here's why:"
                accordionPanelRender={() => (
                  <Flex flexDir="column" px="30px" pb="30px">
                    <OrderedList>
                      <ListItem>
                        <b>Decentralization & Transparency:</b> Real-time,
                        verifiable information is available, with a focus on
                        on-chain activities, which eliminates the need for
                        audits and reduces operational costs.
                      </ListItem>
                      <ListItem>
                        <b>Asset Control & Innovation:</b> The DAO emphasizes
                        self-custody, allowing members to retain direct control
                        over their assets. This model fosters innovation by
                        utilizing smart contracts and decentralized applications
                        (dApps) to automate processes and develop efficient
                        investment products.
                      </ListItem>
                    </OrderedList>
                  </Flex>
                )}
              />
            </VStack>
          </HStack>
        </SectionLayout>
        <SectionLayout bgColor="#E5E7EB">
          <Text>Updates & News</Text>
        </SectionLayout>
      </VStack>
    </Flex>
  );
}


