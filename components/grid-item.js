import Link from "next/link";
import {
  Box,
  Text,
  LinkBox,
  HStack,
  useColorModeValue,
  Flex,
  Image as ChakraImage
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ href, title, date, tags }) => (
  <LinkBox cursor="pointer">
    <Flex
      w="100%"
      minH={16}
      p={3}
      flexDir="column"
      borderRadius="12px"
      borderBottom={"2px solid rgba(255,255,255,0.1)"}
      css={{
        "filter": "grayscale(100%)",
        "transition": "0.5s ease"
      }}
      _hover={{
        "filter": "grayscale(0%)",
        "background": "rgba(255,255,255,0.1)"
      }}
    >
      <Flex
        direction="row"
        align={{ base: "center", md: "baseLine" }}
        justify="space-between"
      >

        <Link href={href} passHref>
          <Text px={2} as="strong" fontSize={{ base: "12", sm: "14", md: "18" }}>{title}</Text>
        </Link>
        <Text fontSize={14} textAlign="center" color={"gray.500"}>{date}</Text>
      </Flex>
      <Box>
        {tags ?
          <Flex direction="row" align="baseLine"  >
            <Text paddingLeft={2} align="left" fontSize={14} fontWeight="bold" color={"gray.500"}>
              Tags:
            </Text>
            {tags.map((tag, index) => {
              return (
                <Text
                  key={index}
                  align="left"
                  color={"gray.500"}
                  ml={2}
                  fontSize={14}
                  fontWeight="bold"
                >
                  {tag}
                </Text>
              )
            })}
          </Flex>
          :
          <></>
        }
      </Box>
    </Flex>
  </LinkBox>
);

export const WorkGridItem = ({ children, path, id, title, thumbnail, stack = false }) => (
  <Box
    w="100%"
    align="center"
    borderRadius="8px"
    padding={2}
    css={{
      "filter": "grayscale(100%)",
      "transition": "0.5s ease"
    }}
    _hover={{
      "filter": "grayscale(0%)",
      "background": "rgba(255,255,255,0.1)"
    }}>
    <Link href={`/${path}/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Flex direction={{ base: "column", sm: "row" }}>

          <ChakraImage
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            maxWidth={{ base: "100%", sm: "200px" }}

          />
          <Flex direction="column" ml={{ base: 0, sm: 5 }} mt={{ base: 2, sm: 0 }} >
            <Link href={`${path}/${id}`} passHref>
              <Text align="left" mt={2} fontSize={20} fontWeight="bold">
                {title}
              </Text>
            </Link>
            <Text align="left" fontSize={14}>{children}</Text>

            {stack ?
              <Flex direction="row" mt={{ base: 5, sm: "auto" }} align="baseLine"  >
                <Text align="left" fontSize={18} fontWeight="bold">
                  Stack:
                </Text>
                <Text align="left" ml={2} fontSize={14}>{stack}</Text>
              </Flex>
              :
              <></>
            }
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  </Box>
);

export function SnippetGridItem({ language, href, title, date }) {
  const colorHover = useColorModeValue("teal.500", "pink.500");
  const backgroundHover = useColorModeValue("white", "");
  return (
    <Box
      w="100%"
      align="center"
      borderRadius="5px"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      transition="0.5s ease"
      _hover={{
        background: backgroundHover,
        color: colorHover,
      }}
    >
      <LinkBox cursor="pointer">
        <Link href={href} passHref>
          <HStack gap="10" my={2} py={3} px={2} justify="space-between">
            <Text>{title}</Text>
            <Text>{language}</Text>
            <Text>{date}</Text>
          </HStack>
        </Link>
      </LinkBox>
    </Box>
  );
}

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
  />
);
