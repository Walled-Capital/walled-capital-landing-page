import { useProjectBox } from "@src/components/project-box-main/useProjectBox";
import {
  linkButtonStyles,
  projectBoxStylesV2,
} from "@src/components/project-box-main/projectBox.styles";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { AccordionButtonCustom } from "@src/components/project-box-main/AccordionButtonCustom";
import { FC } from "react";

interface ProjectBoxV2Props {
  accordionPanelRender: () => JSX.Element;
  title: string;
  iconSrc: string;
  description: string;
}

export const ProjectBoxV2: FC<ProjectBoxV2Props> = ({
  accordionPanelRender,
  iconSrc,
  title,
  description
}) => {
  const { toggle, isOpen, accordionIndex } = useProjectBox();

  return (
    <Accordion sx={projectBoxStylesV2(isOpen)} index={accordionIndex}>
      <AccordionItem className="accordionItem">
        <Flex className="header">
          <Image src={iconSrc} alt="arrowInEllipse" />
          <Text>{title}</Text>
        </Flex>
        <Flex className="description">
          <Text>
            {description}
          </Text>
          <Flex justifyContent="space-between">
            {!isOpen && <Link sx={linkButtonStyles}>enzyme PAGE</Link>}
            {!isOpen && <AccordionButtonCustom onClick={toggle} />}
          </Flex>
        </Flex>
        <AccordionPanel className="accordionPanel" pb={4}>
          {accordionPanelRender()}
          <Flex justifyContent="space-between" px="30px" pb="15px">
            {isOpen && <Link sx={linkButtonStyles}>enzyme PAGE</Link>}
            {isOpen && <AccordionButtonCustom onClick={toggle} />}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
