import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { CopyBlock, dracula } from "react-code-blocks";

const languageDemo = `const number = 12;`

const Snippet = () => (
    <Layout title="snowgirl">
      <Container>
        <Title>
          SnowGirl <Badge>2021</Badge>
        </Title>
        <P>
          Um tema feito baseado em uma imagem que me inspirou a tirar 
        </P>
        <div className="demo">
          <CopyBlock
            language='jsx'
            text={languageDemo}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </Container>
    </Layout>
);

export default Snippet;
