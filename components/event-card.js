import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaCode, FaBookOpen, FaGraduationCap, FaStarOfLife } from 'react-icons/fa'

import { useModalContext, setUrlCertificate} from '../contexts/ModalContext.js'



const EventCard = ({ title, description, path, category, attachment }) => {
  const { onClose, onOpen } = useModalContext();
  let color = '#D53F8C';
  let icon
  let attachmentType

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

  switch (attachment) {
    case 'certificate':
      attachmentType = "Ver Certificado"
      break;
    case 'post':
      attachmentType = "Ler Post"
      break;
    default:
      attachmentType = null
  }

  function openModal(path){
    setUrlCertificate(path)
    onOpen()
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
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={icon} w="30px" h="30px" color={`${color}`} />

        <Text
          as="strong"
          fontSize="lg"
          m="3"
          textAlign="center"
        >
          {title}
        </Text>
      </Box>
      <Box>
        <Text
          as="p"
          textAlign="justify"
          pt="3"
          fontSize="md"
          m={0}
          css={{
            "textIndent": "10px",
            "lineHeight": "22px"
          }}
        >
          {description}
        </Text>
      </Box>
      {attachmentType ?
        <>
          {attachment == 'certificate' ?
            <>
              <Text
                as="p"
                fontWeight="bold"
                pt="5"
                display="inline-block"
                marginLeft="auto"
                onClick={() => openModal(path)}
                css={{ "transition": "0.3s ease" }}
                _hover={{ "cursor": "pointer", "color": `${color}` }}>
                {attachmentType} 
              </Text>
            </> :
            <>
              <Text
                as="a"
                href={path}
                fontWeight="bold"
                pt="5"
                display="inline-block"
                marginLeft="auto"
                css={{ "transition": "0.3s ease" }}
                _hover={{ "cursor": "pointer", "color": `${color}` }}>
                {attachmentType}
              </Text>
            </>
          }
        </> :
        <>
        </>
      }
    </Flex>
  )
}

export default EventCard;