import NextLink from "next/link";
import { Heading, Box, Link, Badge, Image } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children, path, truePath }) => (
  <Box>
    <NextLink href={`/${truePath}`}>
      <Link>{path}</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading as="h3" display="inline-block" fontSize={18} mb={2}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
