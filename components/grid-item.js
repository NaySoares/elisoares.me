import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  HStack,
  useColorModeValue,
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
        height="150"
        width="250"
        loading="lazy"
      />
      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, path, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <Link href={`/${path}/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder={"blur" | ""}
          height="300"
          width="500"
        />
        <LinkOverlay href={`${path}/${id}`}>
          <Text mt={2} fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
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
        <LinkOverlay href={href}>
          <HStack gap="10" my={2} py={3} px={2} justify="space-between">
            <Text>{title}</Text>
            <Text>{language}</Text>
            <Text>{date}</Text>
          </HStack>
        </LinkOverlay>
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
