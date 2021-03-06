import Nextlink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const NotFound = () => {
  const bgButton = useColorModeValue("#2B6CB0", "pink.500");
  const colorButton = useColorModeValue("white", "black");
  return (
    <Container>
      <Heading as="h1">Opss..</Heading>
      <Text>Página não encontrada</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <Nextlink href="/">
          <Button
            color={colorButton}
            bg={bgButton}
            _hover={{
              opacity: 0.7,
              transition: "all 0.3s ease",
            }}
          >
            Retornar ao início
          </Button>
        </Nextlink>
      </Box>
    </Container>
  );
};

export default NotFound;
