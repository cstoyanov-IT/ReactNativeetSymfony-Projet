import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const Styles = css`
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
`;

// Styles pour NavBar
export const navbarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0000FF;
  color: white;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Style = () => <Global styles={Styles} />;
