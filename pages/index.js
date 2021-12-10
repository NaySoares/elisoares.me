import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragragh from "../components/paragraph";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Bem-vindo, sou um desenvolvedor web, morando atualmente em Bel&eacute;m
        do Par&aacute;!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Elienai Soares
          </Heading>
          <p>Gamer, Developer, Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/elienai.jpg"
            alt="profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragragh>
          Elienai &eacute; um estudante de engenharia fascinado por tudo que a
          tecnologia pode fazer. Para ele, tecnologia s&atilde;o as coisas
          (aparentemente) simples que transformam a vida em como ela &eacute;.
          Dentre seus hobbys: desenhar, editar e construir imagens al&eacute;m
          de um leve apego para com as anima&ccedil;&otilde;es s&atilde;o os
          pontos que se mostram em destaque. Caso tenha curiosidade confira
          algumas imagens editadas aqui:{" "}
          <NextLink href="/works">
            <Link>Galeria</Link>
          </NextLink>
          .
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meu Portfólio
              </Button>
            </NextLink>
          </Box>
        </Paragragh>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Gosto de...
        </Heading>
        <Paragragh>
          Música, Animação, Desenhar, Tocar Violão, Design, Desenvolvimento Web,
          Cultura Japonesa.
        </Paragragh>
      </Section>
    </Container>
  );
};

export default Page;
