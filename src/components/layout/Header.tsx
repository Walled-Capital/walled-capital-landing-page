import { Flex, SystemStyleObject } from "@chakra-ui/react";
import { Logo } from "@src/assets/logo";

const HeaderStyles: SystemStyleObject = {
  py: "25px",
  px: { xl: "250px", md: "80px", sm: '20px' },
  alignItems: "center",
  bgColor: "#E5E6E9",
  w: "100%",
  ".logo": {
    position: "relative",
    minW: "185px",
    h: "27px",
    mr: "152px",
  },
  ".menu": {
    mr: "162px",
    w: "100%",
    justifyContent: "space-between",
    ".menuButton": {
      bgColor: "#F9F9F9",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "22px",
      alignItems: "center",
    },
  },
};

export const Header = () => {
  return (
    <Flex sx={HeaderStyles} as="header">
      <Flex className="logo">
        <Logo />
      </Flex>
      {/*<Flex className="menu">*/}
      {/*  <Flex>*/}
      {/*    <Menu>*/}
      {/*      <MenuButton*/}
      {/*        className="menuButton"*/}
      {/*        as={Button}*/}
      {/*        rightIcon={<ChevronDownIcon />}*/}
      {/*      >*/}
      {/*        Funds*/}
      {/*      </MenuButton>*/}
      {/*      <MenuList>*/}
      {/*        <MenuItem>LINK1</MenuItem>*/}
      {/*        <MenuItem>LINK2</MenuItem>*/}
      {/*      </MenuList>*/}
      {/*    </Menu>*/}
      {/*  </Flex>*/}
      {/*  <Flex className="menuButton">DAO</Flex>*/}
      {/*  <Menu>*/}
      {/*    <MenuButton*/}
      {/*      className="menuButton"*/}
      {/*      as={Button}*/}
      {/*      rightIcon={<ChevronDownIcon />}*/}
      {/*    >*/}
      {/*      Resources*/}
      {/*    </MenuButton>*/}
      {/*    <MenuList>*/}
      {/*      <MenuItem>LINK1</MenuItem>*/}
      {/*      <MenuItem>LINK2</MenuItem>*/}
      {/*    </MenuList>*/}
      {/*  </Menu>*/}
      {/*</Flex>*/}
      {/*<Flex visibility="hidden" w="12px" />*/}
    </Flex>
  );
};
