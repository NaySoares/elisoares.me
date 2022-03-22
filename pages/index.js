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
  HStack,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Paragraph, Quote, LinkQuote } from "../components/texts/paragraph";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Title } from "../components/texts/title.js";

const Page = () => {
  const profileImg = `/images/elienai${useColorModeValue("", "-dark")}.jpg`;

  return (
    <Layout>
      <Container minWidth="100%" mt={50}>

        <Title fontSize="2xl">
          O Di&aacute;rio de uma Jornada!
        </Title>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" size="lg" mb={5}>
              Eli Soares
            </Heading>
            <Section delay={0.1}>
              <Paragraph>
                Sou um estudante de engenharia fascinado por tudo que a tecnologia pode fazer.
              </Paragraph>

              <Quote>
                ”Tecnologia s&atilde;o as coisas, aparentemente, simples que transformam a vida no que ela &eacute;.”
              </Quote>

              <Paragraph>
                Este site &eacute; um di&aacute;rio para toda a minha jornada em tecnologia, caso seja um recruiter veja a aba {" "} <Link href="/journey">
                  <LinkQuote>
                    Jornada
                  </LinkQuote>
                </Link>, sen&atilde;o, passe pelos posts e aproveite a estadia, aqui escrevo sobre tudo o que penso.
              </Paragraph>
            </Section>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: "55px" }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={0}
              borderStyle="solid"
              maxWidth="300px"
              display="inline-block"
              borderRadius="20"
              src={profileImg}
              alt="profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Na Web...
          </Heading>
          <List>
            <HStack wrap="wrap">
              <ListItem>
                <Link href="http://github.com/NaySoares" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue("blue", "pink.500")}
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    NaySoares
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/ElienaiSoares07" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue("blue", "pink.500")}
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
                    colorScheme={useColorModeValue("blue", "pink.500")}
                    leftIcon={<Icon as={IoLogoInstagram} />}
                  >
                    @naysoares07
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://linkedin.com/in/elienai-soares"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme={useColorModeValue("blue", "pink.500")}
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    elienai-soares
                  </Button>
                </Link>
              </ListItem>
            </HStack>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
