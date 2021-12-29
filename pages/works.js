import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import snowGirl from "../public/works/snowGirl.jpg";
import snowPhotos from "../public/works/snowPhotos.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projetos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              path="works"
              id="snowgirl"
              title="Tema SnowGirl"
              thumbnail={snowGirl}
            >
              Criando meu próprio tema do VS Code ( versão Light )
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              path="works"
              id="snowphotos"
              title="SnowPhotos"
              thumbnail={snowPhotos}
            >
              Galeria de imagens com Design inspirado no pinterest
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
