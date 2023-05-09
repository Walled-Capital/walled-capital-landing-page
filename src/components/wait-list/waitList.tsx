import { Button, Flex, FormControl, Select } from "@chakra-ui/react";
import {
  inputCustom,
  InputCustom,
} from "@src/components/input-custom/InputCustom";
import { countries } from "@src/data/mock";
import { ProjectBox } from "@src/components/project-box-main/project-box-v1/ProjectBox";
import { useRef } from "react";

export const WaitList = () => {
  const inputFirstNameRef = useRef<HTMLInputElement>(null);
  const inputLastNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLSelectElement>(null);

  const onClickHandler = () => {
    const firstName = inputFirstNameRef.current?.value;
    const lastName = inputLastNameRef.current?.value;
    const email = inputEmailRef.current?.value;
    const country = inputCountryRef.current?.value;

    const data = {
      firstName,
      lastName,
      email,
      country,
    };

    fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify(data),
    });
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
          <Flex flexDir="column" gap="10px 0">
            <InputCustom ref={inputFirstNameRef} placeholder="First Name*" />
            <InputCustom ref={inputLastNameRef} placeholder="Last Name*" />
            <InputCustom ref={inputEmailRef} placeholder="Email*" />
            <FormControl>
              <Select
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
          </Flex>
          <Button onClick={onClickHandler}>Click</Button>
          <Flex>{closeButton}</Flex>
        </Flex>
      )}
    />
  );
};
