"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { colors } from '@/app/styles/global';
import { usePathname } from "next/navigation"


const Wrapper = styled.header<{ display: string }>`
  width: 100%;
  padding: 1.6rem 8rem;
  display: ${({ display }) => display};
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.greyOne};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  position: fixed;
  z-index: 5;
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
  const [showHeader, setShowheader] = useState(false);
  const path = usePathname();
  const [displayHeader, setDisplayHeader] = useState(path);

  const handleScrollHeader = ({ target }: Event) => {
    const windowScrollY = window.scrollY;

    if (windowScrollY >= 60) {
      setDisplayHeader('flex')
      setShowheader(true);
    } else {
      setDisplayHeader('none');
      setShowheader(false)
    }
  }

  useEffect(() => {
    const display = path === '/' ? 'none' : 'flex';
    setDisplayHeader(display);

    window.addEventListener("scroll", (event) => handleScrollHeader(event));
    // return window.removeEventListener("scroll", handleScrollHeader);
  }, [path]);

  useEffect(() => {
    switch (displayHeader) {
      case 'flex':
        setShowheader(true);
        break;
      case 'none':
        setShowheader(!showHeader);
        break;
    }

  }, [displayHeader]);


  return (
    <Wrapper display={displayHeader}>
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