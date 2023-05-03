import { useState } from "react";

export const useProjectBox = () => {
  const [accordionIndex, setAccordionIndex] = useState(-1);

  const open = () => setAccordionIndex(0);
  const close = () => setAccordionIndex(-1);
  const toggle = () => (accordionIndex === 0 ? close() : open());

  const isOpen = accordionIndex === 0;

  return {
    accordionIndex,
    toggle,
    close,
    open,
    isOpen,
  };
};
