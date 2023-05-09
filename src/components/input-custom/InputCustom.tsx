import { FC } from "react";
import { FormControl, Input, SystemStyleObject } from "@chakra-ui/react";

export const inputCustom: SystemStyleObject = {
    borderRadius: "30px",
    mb: { md: "0px", sm: "10px" },
    h: "25px",
    w: "100%",
    fontSize: "12px",
    color: "#F3F4F6",
    borderColor: "#F3F4F6",
    _placeholder: { color: "#F3F4F6" },
    _focusVisible: {
      borderColor: "#F3F4F6",
      boxShadow: "none",
    },
    _hover: {
      borderColor: "#F3F4F6",
    },

};

interface InputCustomProps {
  placeholder: string;
}

export const InputCustom: FC<InputCustomProps> = ({
  placeholder = "Email",
}) => {
  return (
    <FormControl >
      <Input sx={inputCustom} placeholder={placeholder} />
    </FormControl>
  );
};
