import Nextlink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>Página não encontrada</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <Nextlink href="/">
          <Button colorScheme="teal">Retornar ao ínicio</Button>
        </Nextlink>
      </Box>
    </Container>
  );
};

export default NotFound;
