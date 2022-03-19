import { Box, Flex, Text, Image} from "@chakra-ui/react";

const EventCard = ({ title, description, path, category }) => {
  let color = '#D53F8C'
  
  switch (category) {
    case "course":
      color = '#D53F8C'
      break;
    case "project":
      color = '#5490FF'
      break;
    case "review":
      color = '#2FAB73'
      break;
    default:
      color = '#D53F8C'
  }

  return (
    <Flex
    align="center"
    direction="column"
    bg={"rgba(255,255,255,0.01)"}
    p={30}
    border={`2px solid ${color}`}
    borderRadius={15}
  >
    <Box
      display={"flex"}
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        borderRadius="full"
        width="50px"
        height="50px"
        src="http://github.com/NaySoares.png"
        alt="pic profile"
      />
      
      <Text
        as={"strong"}
        fontSize={"lg"}
        m={"3"}
        textAlign={"center"}
      >
        {title}
      </Text>
    </Box>
    <Box>
      <Text
        as={"p"}
        textAlign={"justify"}
        pt={"3"}
        fontSize={"md"}
        m={0}
        css={{
          "textIndent": "10px",
          "line-height": "22px"
        }}
      >
        {description}
      </Text>
    </Box>
    <Text
      as={"a"}
      href={path}
      fontWeight={"bold"}
      pt={"5"}
      display={"inline-block"}
      marginLeft={"70%"}
      css={{"transition": "0.3s ease"}}
      _hover={{"cursor": "pointer", "color": `${color}`}}>
      Ler Post
    </Text>
  </Flex>
  )
}

export default EventCard;