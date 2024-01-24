'use client'

import styled from 'styled-components'

export const HelpModal = styled.div`
  width: 400px;
  padding: 50px;
  border-radius: 50px;

  position: relative;
  background-color: var(--secondary-color);
`

export const HeaderModal = styled.div`
  h1 {
    margin: auto;
    margin-bottom: 30px;
    text-align: center;

    font-size: 32px;
    color: var(--tertiary-color);
    text-align: center;
    @media screen and (max-width: 400px) {
      font-size: 24px;
    }
  }

  display: flex;
  justify-content: space-between;
`

export const CloseModal = styled.div`
  width: 30px;
  height: 30px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(45deg);
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 3px;

    position: absolute;

    background-color: var(--tertiary-color);
  }
  &::before {
    transform: rotate(90deg);
  }
`

export const Description = styled.p`
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 22px;
  color: var(--quartenary-color);

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`

export const IconsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const IconDescription = styled.p`
  font-size: 16px;
  color: var(--quartenary-color);

  svg {
    width: 30px;
    path {
      fill: var(--quartenary-color);
    }

    &#reset-icon path {
      fill: none;
      stroke: var(--quartenary-color);
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;

    svg {
      width: 20px;
    }
  }
`
