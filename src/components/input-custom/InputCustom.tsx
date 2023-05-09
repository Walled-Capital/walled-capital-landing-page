import {
  forwardRef,
  Input,
  InputProps,
  SystemStyleObject,
} from "@chakra-ui/react";

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

type props = InputCustomProps & InputProps

export const InputCustom = forwardRef<props, "input">(
  ({ placeholder = "Email", ...props }, ref) => {
    return (
      <Input {...props} ref={ref} sx={inputCustom} placeholder={placeholder} />
    );
  }
);
