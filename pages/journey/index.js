import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

const Journey = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Essa página ainda está em construção, em breve estará pronta!
      </Heading>
    </Container>
  </Layout>
);

export default Journey;
