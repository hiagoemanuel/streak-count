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
  a {
    min-width: 75px;
    height: 75px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    background-color: var(--secondary-color);
  }
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

export const Configs = styled.div<{ $isOpen: boolean }>`
  min-width: 75px;
  height: 75px;
  border-radius: 50%;

  overflow: hidden;
  z-index: 5000;

  background-color: var(--secondary-color);
`

export const ConfigButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: inherit;

  position: relative;

  svg {
    transition: 0.75s;
    transform: rotate(${(p) => (p.$isOpen ? '-180deg' : '0deg')});
  }

  &::before {
    content: '';
    width: 45px;
    height: 3px;
    border: 3px solid var(--secondary-color);
    border-radius: 50px;

    position: absolute;
    z-index: 1;

    transform: translate(${(p) => (p.$isOpen ? '0,0' : '75px,-75px')})
      rotate(125deg);
    transition: 0.75s;

    background-color: var(--tertiary-color);
  }
`

export const Settings = styled.div<{ $isOpen: boolean }>`
  padding: 17.5px;
  border-bottom: 30px solid var(--secondary-color);
  border-radius: 50px 50px 0 0;

  display: flex;
  flex-direction: column;
  gap: 25px;

  position: absolute;
  bottom: 75px;
  z-index: -1;

  transform: scaleY(${(p) => (p.$isOpen ? 1 : 0)});
  transform-origin: bottom;

  transition: 200ms;
  background-color: var(--secondary-color);

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    bottom: 100px;
  }
`
