import {
  Button,
  Flex,
  FormControl,
  Input,
  Link,
  SystemStyleObject,
  Text,
} from "@chakra-ui/react";

import { Logo } from "@src/assets/logo";

const px = { xl: "250px", md: "80px" };

const footerStyles: SystemStyleObject = {
  w: "100%",
  flexDirection: "column",
  ".additional": {
    w: "100%",
    py: "20px",
    bgColor: "#BCC1C7",
    px,
    justifyContent: "space-between",
    svg: {
      h: "24px",
      w: "142px",
      color: "#5F5F5F",
    },
    ".subscribe-section": {
      flexDir: { xl: "row", md: "column" },
      ".info": {
        flexDirection: "column",
        color: "#6D6D6D",
        fontSize: "13px",
        pr: "40px",
        pb: { xl: "0px", md: "10px" },
      },
      ".input-block": {
        flexDirection: { xl: "column", md: "row" },
        input: {
          borderRadius: "30px",
          h: "25px",
          w: "240px",
          fontSize: "12px",
          color: "#F3F4F6",
          borderColor: "#F3F4F6",
          _placeholder: { color: "#F3F4F6" },
          _focusVisible: {
            borderColor: "#F3F4F6",
            boxShadow: "none",
          },
          _hover: {
            borderColor: "#F3F4F6",
          },
        },
        button: {
          bgColor: "#E5E7EB",
          w: "118px",
          h: "25px",
          borderRadius: "30px",
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          color: "#5F5F5F",
        },
      },
    },
  },
  ".main": {
    flexDir: { xl: "row", md: "column" },
    h: { xl: "36px", md: "61px" },
    w: "100%",
    bgColor: "#A5A8AC",
    alignItems: "center",
    justifyContent: 'center',
    px: { ...px, md: "160px" },
    fontSize: "13px",
    color: "#6D6D6D",
    gap: "10px",
    a: {
      fontWeight: 700,
      textDecoration: "underline",
    },
    p: {
      a: {
        fontWeight: 500,
      },
    },
  },
};

export const Footer = () => {
  return (
    <Flex as="footer" sx={footerStyles}>
      <Flex className="additional">
        <Logo />
        <Flex className="subscribe-section">
          <Flex className="info">
            <Text>Subscription</Text>
            <Text fontWeight={700}>Stay in touch with Walled news</Text>
          </Flex>
          <Flex className="input-block">
            <Flex as="form" flexDir={["row", "column"]}>
              <FormControl pb={["0px", "9px"]}>
                <Input placeholder="Email" />
              </FormControl>
              <Button>Subscribe</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="main">
        <Flex w="100%" justifyContent="space-between">
          <Text>Walled © 2023</Text>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookie Preferences</Link>
        </Flex>
        <Text w="100%">
          This site is protected by reCAPTCHA. Google&apos;s{" "}
          <Link href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </Link>{" "}
          apply.
        </Text>
      </Flex>
    </Flex>
  );
};
