import { FC } from "react";
import { AccordionButton, AccordionIcon, Flex } from "@chakra-ui/react";

import { accordionButtonStyles } from "@src/components/project-box-main/projectBox.styles";

interface AccordionButtonCustom {
  onClick: () => void;
}

export const AccordionButtonCustom: FC<AccordionButtonCustom> = ({
  onClick,
}) => (
  <Flex justifyContent="flex-end">
    <AccordionButton sx={accordionButtonStyles} onClick={onClick}>
      Short Info
      <AccordionIcon />
    </AccordionButton>
  </Flex>
);
