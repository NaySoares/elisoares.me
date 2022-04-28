import { useDisclosure } from '@chakra-ui/react';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const disclosure = useDisclosure();
  const [urlCertificate, setUrlCertificate] = useState('');

  function updateUrlCertificate(url){
    setUrlCertificate(url)
  }

  return (
    <ModalContext.Provider value={{disclosure, urlCertificate, updateUrlCertificate}} >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext);
