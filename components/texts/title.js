import { Heading, useColorModeValue } from "@chakra-ui/react";

export const Title = ({ children, fontSize = "xl" }) => {
  const gradientText = useColorModeValue("#319795", "#D53F8C");
  const gradientTextSecond = useColorModeValue("#5490FF", "#8257E6");

  const PrimaryTitle = (
    <Heading
      as="h2"
      size={fontSize}
      align="center"
      margin={10}
      css={{
        "backgroundImage": `linear-gradient(45deg, ${gradientText}, ${gradientTextSecond})`,
        "backgroundSize": "100%",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent"
      }}>
      {children}
    </Heading>
  )

  const SubTitle = (
    <Heading
      as="h2"
      size={fontSize}
      align="left"
      mb={{ base: 2, md: 5 }}
      paddingLeft={2}
      css={{
        "backgroundImage": `linear-gradient(45deg, ${gradientText}, ${gradientTextSecond})`,
        "backgroundSize": "50%",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent"
      }}>
      {children}
    </Heading>
  )

  if (fontSize === "xl") {
    return SubTitle
  } else {
    return PrimaryTitle
  }
}