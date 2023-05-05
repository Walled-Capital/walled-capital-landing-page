import { FC } from "react";
import { AccordionButton, AccordionIcon, Flex } from "@chakra-ui/react";

import { accordionButtonStyles } from "@src/components/project-box-main/projectBox.styles";

interface AccordionButtonCustom {
  onClick: () => void;
  label: string;
}

export const AccordionButtonCustom: FC<AccordionButtonCustom> = ({
  onClick,
  label = 'Short Info',
}) => (
  <Flex justifyContent="flex-end">
    <AccordionButton sx={accordionButtonStyles} onClick={onClick}>
      {label}
      <AccordionIcon />
    </AccordionButton>
  </Flex>
);
