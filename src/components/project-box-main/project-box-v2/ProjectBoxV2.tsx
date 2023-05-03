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
  imagesSrc?: string[];
}

export const ProjectBoxV2: FC<ProjectBoxV2Props> = ({
  accordionPanelRender,
  iconSrc,
  title,
  description,
  imagesSrc,
}) => {
  const { toggle, isOpen, accordionIndex } = useProjectBox();

  const isLinkDisable = !!imagesSrc?.length;

  return (
    <Accordion sx={projectBoxStylesV2(isOpen)} index={accordionIndex}>
      <AccordionItem className="accordionItem">
        <Flex className="header">
          <Image src={iconSrc} alt="arrowInEllipse" />
          <Text>{title}</Text>
        </Flex>
        <Flex className="description">
          <Text>{description}</Text>
          {(isLinkDisable && !isOpen) && (
            <Flex
              pb="30px"
              pt={isOpen ? "30px" : 0}
              justifyContent="space-between"
            >
              {imagesSrc?.map((src, index) => (
                <Image key={index} src={src} alt={src} />
              ))}
            </Flex>
          )}
          <Flex justifyContent={isLinkDisable ? "flex-end" : "space-between"}>
            {!isOpen && !isLinkDisable && (
              <Link sx={linkButtonStyles}>enzyme PAGE</Link>
            )}
            {!isOpen && <AccordionButtonCustom onClick={toggle} />}
          </Flex>
        </Flex>
        <AccordionPanel className="accordionPanel" pb={4}>
          {accordionPanelRender()}
          {(isLinkDisable && isOpen) && (
            <Flex
              pb="30px"
              pt={isOpen ? "30px" : 0}
              justifyContent="space-between"
              px='30px'
            >
              {imagesSrc?.map((src, index) => (
                <Image key={index} src={src} alt={src} />
              ))}
            </Flex>
          )}
          <Flex
            justifyContent={isLinkDisable ? "flex-end" : "space-between"}
            px="30px"
            pb="30px"
          >
            {isOpen && !isLinkDisable && (
              <Link sx={linkButtonStyles}>enzyme PAGE</Link>
            )}
            {isOpen && <AccordionButtonCustom onClick={toggle} />}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
