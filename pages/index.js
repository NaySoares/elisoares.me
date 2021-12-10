import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return(
    <Container>
      <Box borderRadius="lg" bg="pink.500" p={3} mb={6} align="center">
        Bem-vindo, sou um desenvolvedor web, morando atualmente em Bel&eacute;m do Par&aacute;!
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Elienai Soares
        </Heading>
        <p>Gamer, Developer, Designer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page