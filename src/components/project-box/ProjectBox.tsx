import { FC, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { projectBoxStyles } from "@src/components/project-box/projectBox.styles";

interface ProjectBoxProps {
  accordionPanelRender: (props: { closeButton: JSX.Element }) => JSX.Element;
}

export const ProjectBox: FC<ProjectBoxProps> = ({ accordionPanelRender }) => {
  const [accordionIndex, setAccordionIndex] = useState(-1);

  const open = () => setAccordionIndex(0);
  const close = () => setAccordionIndex(-1);
  const toggle = () => (accordionIndex === 0 ? close() : open());

  const isOpen = accordionIndex === 0;

  const closeButton = (
    <>
      {isOpen && (
        <Flex className="accordionButtonWrapper">
          <AccordionButton className="accordionButton" onClick={toggle}>
            Short Info
            <AccordionIcon />
          </AccordionButton>
        </Flex>
      )}
    </>
  );

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        pt: "100px",
        w: "500px",
      }}
    >
      <Accordion sx={projectBoxStyles} allowToggle>
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
          {!isOpen && (
            <Flex className="accordionButtonWrapper">
              <AccordionButton className="accordionButton" onClick={toggle}>
                Short Info
                <AccordionIcon />
              </AccordionButton>
            </Flex>
          )}

          <AccordionPanel className="accordionPanel" pb={4}>
            {accordionPanelRender({ closeButton })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
