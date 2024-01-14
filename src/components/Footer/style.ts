'use client'

import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`

export const HelpButton = styled.div`
  min-width: 75px;
  height: 75px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: var(--secondary-color);
`

export const Credits = styled.h3`
  @media screen and (max-width: 500px) {
    order: 1;
    margin: 0 auto;
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`

export const Configs = styled.div`
  min-width: 75px;
  height: 75px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: var(--secondary-color);
`
