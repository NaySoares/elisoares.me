import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="snowgirl">
      <Container>
        <Title>
          SnowGirl <Badge>2021</Badge>
        </Title>
        <P>
          Um tema feito baseado em uma imagem que me inspirou a tirar do papel
          esse projeto que já tinha há tempos.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">
              https://www.siteFicticio.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJs</span>
          </ListItem>
        </List>
        <WorkImage src="../../public/works/snowGirl.jpg" alt="snowGirl" />
      </Container>
    </Layout>
);

export default Work;
