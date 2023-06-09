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
import { useMinWidthMedia } from "@src/hooks/useMediaWidth";

interface ProjectBoxV2Props {
  accordionPanelRender: () => JSX.Element;
  title: string;
  iconSrc: string;
  description: string;
  imagesSrc?: { iconSrc: string; link?: string }[];
  linkTitle?: string;
  linkSrc?: string;
}

export const ProjectBoxV2: FC<ProjectBoxV2Props> = ({
  accordionPanelRender,
  iconSrc,
  title,
  description,
  imagesSrc,
  linkTitle,
  linkSrc,
}) => {
  const { toggle, isOpen, accordionIndex } = useProjectBox();

  const [isLargerThenMd] = useMinWidthMedia("md");
  const isLinkDisable = !!imagesSrc?.length || !linkTitle;

  const justifyContent = !isLargerThenMd
    ? "center"
    : isLinkDisable
    ? "flex-end"
    : "space-between";

  return (
    <Accordion sx={projectBoxStylesV2(isOpen)} index={accordionIndex}>
      <AccordionItem className="accordionItem">
        <Flex className="header">
          <Image src={iconSrc} alt="arrowInEllipse" />
          <Text>{title}</Text>
        </Flex>
        <Flex className="description">
          <Text dangerouslySetInnerHTML={{ __html: description }} />
          <Flex className="imagesBlock">
            {isLinkDisable && !isOpen && (
              <Flex
                pb="30px"
                pt={isOpen ? "30px" : 0}
                justifyContent="space-between"
                w="100%"
              >
                {imagesSrc?.map(({ link, iconSrc }, index) => (
                  <Link
                    key={index}
                    maxW="30%"
                    cursor={link ? "pointer" : "auto"}
                    href={link}
                    target="_blank"
                  >
                    <Image src={iconSrc} alt={iconSrc} />
                  </Link>
                ))}
              </Flex>
            )}
            <Flex justifyContent={justifyContent} gap="0 7px">
              {!isOpen && !isLinkDisable && (
                <Flex w={{ md: "50%", sm: "100%" }}>
                  <Link href={linkSrc} target="_blank" sx={linkButtonStyles}>
                    {linkTitle}
                  </Link>
                </Flex>
              )}
              {!isOpen && (
                <Flex w={{ md: "50%", sm: "100%" }}>
                  <AccordionButtonCustom onClick={toggle} />
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
        <AccordionPanel className="accordionPanel" pb={4}>
          {accordionPanelRender()}
          {isLinkDisable && isOpen && (
            <Flex
              pb="30px"
              pt={isOpen ? "30px" : 0}
              justifyContent="space-between"
              px="30px"
            >
              {imagesSrc?.map(({ iconSrc, link }, index) => (
                <Link
                  key={index}
                  maxW="30%"
                  cursor={link ? "pointer" : "auto"}
                  href={link}
                  target="_blank"
                >
                  <Image src={iconSrc} alt={iconSrc} />
                </Link>
              ))}
            </Flex>
          )}
          <Flex
            justifyContent={justifyContent}
            px="30px"
            pb="30px"
            w="100%"
            gap="7px"
            flexDir={{ md: "row", sm: "column" }}
          >
            {isOpen && !isLinkDisable && (
              <Flex w={{ md: "50%", sm: "100%" }} justifyContent={{md: 'flex-start', sm: 'center'}}>
                <Link href={linkSrc} target="_blank" sx={linkButtonStyles}>
                  {linkTitle}
                </Link>
              </Flex>
            )}
            {isOpen && (
              <Flex w={{ md: "50%", sm: "100%" }}>
                <AccordionButtonCustom onClick={toggle} />
              </Flex>
            )}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
