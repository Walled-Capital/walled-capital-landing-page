import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { projectBoxStyles } from "@src/components/project-box-main/projectBox.styles";
import { useProjectBox } from "@src/components/project-box-main/useProjectBox";
import { AccordionButtonCustom } from "@src/components/project-box-main/AccordionButtonCustom";

interface ProjectBoxProps {
  accordionPanelRender: (props: { closeButton: JSX.Element }) => JSX.Element;
  buttonLabel?: string;
  title?: string;
  description?: string;
  iconSrc?: string;
  background?: string;
}

export const ProjectBox: FC<ProjectBoxProps> = ({
  title,
  description,
  iconSrc,
  background = "linear-gradient(77.53deg, #EA6A61 6.33%, #EEA19C 90.13%)",
  buttonLabel = "Short Info",
  accordionPanelRender,
}) => {
  const { toggle, isOpen, accordionIndex } = useProjectBox();

  const closeButton = (
    <>
      {isOpen && <AccordionButtonCustom onClick={toggle} label={buttonLabel} />}
    </>
  );

  return (
    <Accordion sx={projectBoxStyles(background)} index={accordionIndex}>
      <AccordionItem className="accordionItem">
        <Flex className="header">
          <Text>{title}</Text>
          {iconSrc && (
            <Link href='https://walled.enzyme.community' target='_blank'>
              <Image src={iconSrc} alt="arrowInEllipse" />
            </Link>
          )}
        </Flex>
        <Flex
          sx={{
            w: "205px",
            fontSize: "13px",
            fontWeight: 500,
            pb: "20px",
          }}
        >
          {description}
        </Flex>
        {!isOpen && (
          <AccordionButtonCustom onClick={toggle} label={buttonLabel} />
        )}

        <AccordionPanel className="accordionPanel" pb={4}>
          {accordionPanelRender({ closeButton })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
