import { FC } from 'react';
import { Box, Flex, FlexProps, SystemStyleObject } from '@chakra-ui/react';

import { Header } from '@src/components/layout/Header';
import { Footer } from '@src/components/layout/Footer';

const LayoutStyles: SystemStyleObject = {
  flexDIr: 'column',
  flexDir: 'column',
  minH: '100%',
  position: 'relative',
  alignItems: 'center',
};

export const Layout: FC<FlexProps> = ({ children, ...props }) => (
  <Flex sx={LayoutStyles} {...props} >
    <Header />
    <Box as="main" flex="1 1 auto" w='100%'>
      {children}
    </Box>
    <Footer />
  </Flex>
);
