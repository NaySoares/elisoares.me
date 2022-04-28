import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
  Text,
  Img } from '@chakra-ui/react'
import { useModalContext, urlCertificate } from '../contexts/ModalContext.js'

export const ModalCerticate = () => {
  const { isOpen, onOpen, onClose } = useModalContext()
  const colorDefault = useColorModeValue("#5490FF", "#D53F8C");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {urlCertificate == '' ?
              <Text>Não foi possível carregar este certificado!</Text>
              :
              <Img
                src={urlCertificate}
                width='100%'
              />
            }
          </ModalBody>
          <ModalFooter>
            <Button bg={colorDefault} mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalCerticate;


