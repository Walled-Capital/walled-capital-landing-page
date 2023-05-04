import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { projectBoxStyles } from "@src/components/project-box-main/projectBox.styles";
import { useProjectBox } from "@src/components/project-box-main/useProjectBox";
import { AccordionButtonCustom } from "@src/components/project-box-main/AccordionButtonCustom";

interface ProjectBoxProps {
  accordionPanelRender: (props: { closeButton: JSX.Element }) => JSX.Element;
}

export const ProjectBox: FC<ProjectBoxProps> = ({ accordionPanelRender }) => {
  const { toggle, isOpen, accordionIndex } = useProjectBox();

  const closeButton = (
    <>{isOpen && <AccordionButtonCustom onClick={toggle} />}</>
  );

  return (
    <Accordion sx={projectBoxStyles} index={accordionIndex}>
      <AccordionItem className="accordionItem">
        <Flex className="header">
          <Text>Walled Fund I</Text>
          <Image src="/arrowInEllipse.svg" alt="arrowInEllipse" />
        </Flex>
        <Flex
          sx={{
            w: "205px",
            fontSize: "13px",
            fontWeight: 500,
            pb: "20px",
          }}
        >
          Undervalued assets fund with low risk DeFI yields strategies
        </Flex>
        {!isOpen && <AccordionButtonCustom onClick={toggle} />}

        <AccordionPanel className="accordionPanel" pb={4}>
          {accordionPanelRender({ closeButton })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
