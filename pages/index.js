import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragragh from "../components/paragraph";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

const Page = () => {
  const profileImg = `/images/elienai${useColorModeValue("", "-dark")}.jpg`;
  const colorButton = useColorModeValue("white", "black");
  const bgButton = useColorModeValue("#319795", "pink.500");
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Bem-vindo, sou um desenvolvedor web, morando atualmente em
          Bel&eacute;m do Par&aacute;!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Elienai Soares
            </Heading>
            <p>Developer, Designer, Gamer</p>
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
              src={profileImg}
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
                <Button
                  rightIcon={<ChevronRightIcon />}
                  color={colorButton}
                  bg={bgButton}
                  _hover={{
                    opacity: 0.7,
                    transition: "all 0.3s ease"
                  }}
                >
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
            Música, Animação, Desenhar, Tocar Violão, Design, Desenvolvimento
            Web, Cultura Japonesa.
          </Paragragh>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Redes Sociais
          </Heading>
          <List>
            <ListItem>
              <Link href="http://github.com/NaySoares" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("teal", "pink.500")}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @NaySoares
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/ElienaiSoares07" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("teal", "pink.500")}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @ElienaiSoares07
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/naysoares07/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("teal", "pink.500")}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @naysoares07
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
