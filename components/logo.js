import Link from "next/link";
import Image from "next/image";
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
  const snowFlake = `/images/snowflake${useColorModeValue("", "-white")}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={snowFlake} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='"Heebo", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            E.Soares
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
