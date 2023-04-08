import React from "react";
import { IoIosArrowForward } from "react-icons/Io";
import { Container, LinkStyled } from "./Navigation.styled";
import { useRouter } from "next/router";

import navigation from "../../../public/bd/navigation.json";

export const Navigation = () => {
  const router = useRouter();

  const { category } = navigation.find((item) => item.path === router.pathname);

  return (
    <Container>
      <LinkStyled href={"/"}>Головна</LinkStyled>

      <IoIosArrowForward />
      <LinkStyled href={router.pathname}>{category}</LinkStyled>
    </Container>
  );
};
