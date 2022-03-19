import Link from "next/link";
import Image from 'next/image';
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

export const GridItem = ({ children, thumbnail, href, title }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder={"blur" | ""}
        width={250}
        height={150}
        loading="lazy"
      />
      <Link href={href} passHref>
        <Text mt={2}>{title}</Text>
      </Link>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
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
        <Flex direction={{base: "column", md: "row"}}>

          <ChakraImage
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder={"blur" | ""}
            maxWidth={{base:"100%", md: "200px"}}
            
          />
          <Flex direction="column" ml={{base: 0, md: 5}} mt={{base: 2, md: 0}} >
            <Link href={`${path}/${id}`} passHref>
              <Text align="left" mt={2} fontSize={20} fontWeight="bold">
                {title}
              </Text>
            </Link>
            <Text align="left" fontSize={14}>{children}</Text>

            {stack ? 
            <Flex direction="row" mt={{base: 5, md: "auto"}} align="baseLine"  >
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
