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

export const Configs = styled.div`
  min-width: 75px;
  height: 75px;
  border-radius: 50%;

  z-index: 5000;
  position: relative;

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
  overflow: hidden;

  svg {
    transition: transform 0.75s;
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
    transition: transform 0.75s;

    background-color: var(--tertiary-color);
  }
`

export const Settings = styled.div<{ $isOpen: boolean }>`
  width: 75px;
  padding: 17.5px;
  border-bottom: 30px solid var(--secondary-color);
  border-radius: 50px 50px 0 0;

  display: flex;
  flex-direction: column;
  gap: 25px;

  position: absolute;
  bottom: 35px;
  z-index: -1;
  overflow-x: hidden;

  transform: scaleY(${(p) => (p.$isOpen ? 1 : 0)});
  transform-origin: bottom;

  transition: transform 200ms;
  background-color: var(--secondary-color);

  svg {
    cursor: pointer;
  }
`

export const SwitchTheme = styled.button<{ $darkOrLight: 'dark' | 'light' }>`
  width: max-content;
  display: flex;
  gap: 60px;

  overflow: hidden;

  transform: translateX(${(p) => (p.$darkOrLight === 'dark' ? '' : '-100px')});
  transition: transform 1s cubic-bezier(1, 0.25, 0.25, 1);
`
