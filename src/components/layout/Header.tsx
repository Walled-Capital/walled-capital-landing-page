import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SystemStyleObject,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@src/assets/icons";

const HeaderStyles: SystemStyleObject = {
  h: "72px",
  px: "250px",
  alignItems: "center",
  bgColor: '#F9F9F9',
  w: "100%",
  ".logo": {
    position: "relative",
    minW: "185px",
    h: "27px",
    mr: "152px",
  },
  ".menu": {
    mr: '162px',
    w: '100%',
    justifyContent: 'space-between',
    ".menuButton": {
      bgColor: '#F9F9F9',
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
        <Image src="/walledLogo.svg" alt="walledLogo" fill />
      </Flex>
      <Flex className="menu">
        <Flex>
          <Menu>
            <MenuButton
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Funds
            </MenuButton>
            <MenuList>
              <MenuItem>LINK1</MenuItem>
              <MenuItem>LINK2</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex className="menuButton">DAO</Flex>
        <Menu>
          <MenuButton
            className="menuButton"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Resources
          </MenuButton>
          <MenuList>
            <MenuItem>LINK1</MenuItem>
            <MenuItem>LINK2</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex visibility='hidden' w='12px'/>
    </Flex>
  );
};
