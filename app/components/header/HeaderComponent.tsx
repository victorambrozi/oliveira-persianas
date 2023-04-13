"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { colors, sansFont } from '@/app/styles/global';
import { usePathname } from "next/navigation"


const Wrapper = styled.header<{ display: boolean }>`
  width: 100%;
  padding: 1.6rem 13rem;
  display: ${({ display }) => display ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.greyOne};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Logo = styled.div`
  width: 180px;
  height: 60px;

  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    padding: 0.4rem 0.8rem;

    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;

    color: ${colors.greyFive}
  }
`;

const HeaderComponent = () => {
  const [showHeader, setShowheader] = useState(true);
  const path = usePathname();
  const [pathname, setPathame] = useState(path);

  useEffect(() => {
    if (pathname === '/') {
      setShowheader(false);
      return;
    }

  }, [pathname]);


  return (
    <Wrapper display={showHeader}>
      <Logo>LOGO</Logo>
      <Nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>Sobre</Link>
        <Link href={"/#services"}>Serviços</Link>
        <Link href={"/contact"}>Contato</Link>
      </Nav>
    </Wrapper>
  )
}

export default HeaderComponent;