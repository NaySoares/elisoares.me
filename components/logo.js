import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover {
    animation: shake 1s infinite;
  }
  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='"Heebo", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Eli
          </Text>
            <Text
            color={useColorModeValue("teal", "pink.500")}
            fontFamily='"Heebo", sans-serif'
            fontWeight="bold"
          >
            .
          </Text>
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='"Heebo", sans-serif'
            fontWeight="bold"
          >
            Soares
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
