import { FormEvent, useRef } from "react";
import { Button, Flex, FormControl, Select } from "@chakra-ui/react";
import {
  inputCustom,
  InputCustom,
} from "@src/components/input-custom/InputCustom";
import { countries } from "@src/data/mock";
import { ProjectBox } from "@src/components/project-box-main/project-box-v1/ProjectBox";
import { linkButtonStyles } from "@src/components/project-box-main/projectBox.styles";

export const WaitList = () => {
  const inputFirstNameRef = useRef<HTMLInputElement>(null);
  const inputLastNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLSelectElement>(null);

  const onClickHandler = (e: FormEvent) => {
    e.preventDefault();

    const firstName = inputFirstNameRef.current?.value;
    const lastName = inputLastNameRef.current?.value;
    const email = inputEmailRef.current?.value;
    const country = inputCountryRef.current?.value;

    fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
      }),
    });

    inputFirstNameRef.current!.value = "";
    inputLastNameRef.current!.value = "";
    inputEmailRef.current!.value = "";
    inputCountryRef.current!.value = "";
  };

  return (
    <ProjectBox
      title="Walled Fund Stables"
      description="Stablecoins only fund with a low risk DeFi vields strategies"
      background="linear-gradient(77.41deg, #6865EA 5.56%, #B1B0E1 92.56%);"
      buttonLabel="waitlist"
      accordionPanelRender={({ closeButton }) => (
        <Flex flexDir="column" gap="10px 0">
          <Flex fontSize="13px">Join waitlist</Flex>
          <Flex
            as="form"
            flexDir="column"
            gap="10px 0"
            onSubmit={onClickHandler}
          >
            <InputCustom
              isRequired
              type="text"
              ref={inputFirstNameRef}
              placeholder="First Name*"
            />
            <InputCustom
              type="text"
              ref={inputLastNameRef}
              placeholder="Last Name*"
            />
            <InputCustom
              type="email"
              isRequired
              ref={inputEmailRef}
              placeholder="Email*"
            />
            <FormControl>
              <Select
                isRequired
                ref={inputCountryRef}
                sx={{ ...inputCustom, option: { color: "black" } }}
                placeholder="Country of residence*"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Flex justifyContent="space-between">
              <Button sx={linkButtonStyles} variant="white" type="submit">
                Send
              </Button>
              <Flex>{closeButton}</Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    />
  );
};
