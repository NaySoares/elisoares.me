import { Box, Flex, Text, Icon} from "@chakra-ui/react";
import { FaCode, FaBookOpen, FaGraduationCap, FaStarOfLife } from 'react-icons/fa'

const EventCard = ({ title, description, path, category }) => {
  let color = '#D53F8C'
  let icon
  
  switch (category) {
    case "course":
      color = '#D53F8C'
      icon = FaGraduationCap
      break;
    case "project":
      color = '#5490FF'
      icon = FaCode
      break;
    case "review":
      color = '#2FAB73'
      icon = FaBookOpen
      break;
    default:
      color = '#D53F8C'
      icon = FaStarOfLife
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
      <Icon as={icon} w={"30px"} h={"30px"} color={`${color}`} />
    
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