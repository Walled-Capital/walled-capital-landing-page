import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

interface ArticleCardProps {
  imageSrs: string;
  date?: string;
  type?: string;
  description?: string;
  link?: string;
}

const mockText = `The Role of Innovation and Excellence in the Digital Assets Era:
        Insights from Walled Capital`;

export const ArticleCard: FC<ArticleCardProps> = ({
  imageSrs,
  date = "March 28, 2023",
  link,
  type = "Blog",
  description = mockText,
}) => (
  <Flex flexDir="column" borderRadius="20px 20px 0 0" width="295px">
    <Flex h="166px">
      <Image src={imageSrs} alt={imageSrs} />
    </Flex>
    <Flex
      flexDir="column"
      borderRadius="0 0 20px 20px"
      px="14px"
      py="19px"
      bgColor="#fff"
    >
      <Flex mb="26px">
        <Flex mr="17px">
          <Image src="/documentIcon.svg" alt="documentIcon" />
        </Flex>
        <Flex color="#B5B6B7">
          {type} · {date}
        </Flex>
      </Flex>
      <Flex mb="10px" fontSize="17px" fontWeight={500} lineHeight="21px">
        {description}
      </Flex>
      <Flex justifyContent="flex-end">
        <Button
          fontSize="12px"
          px="25px"
          py="5px"
          h="auto"
          variant={link ? "black" : "disabled"}
        >
          read
        </Button>
      </Flex>
    </Flex>
  </Flex>
);
