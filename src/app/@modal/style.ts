'use client'

import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100svh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #00000015;
`
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Spínner = styled.div`
  width: 50px;
  height: 50px;
  border: 19px dotted var(--tertiary-color);
  border-radius: 50%;

  animation: ${rotate} 2s linear infinite;
`
