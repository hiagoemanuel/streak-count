'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100svw;
  height: 100svh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #00000015;
`

export const Form = styled.form`
  width: 865px;
  padding: 20px;
  border-radius: 20px;
  margin: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  background-color: var(--secondary-color);

  /* @media screen and (max-width: 640px) {
    min-width: max-content;
  } */
  @media screen and (max-width: 400px) {
    margin: 5px;
  }
`

export const Title = styled.h1`
  font-size: 38px;
  text-align: center;

  @media screen and (max-width: 885px) {
    font-size: 32px;
  }
  @media screen and (max-width: 760px) {
    font-size: 26px;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
`

export const Inputs = styled.div`
  width: 100%;

  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

  input[type='text'] {
    min-width: 95%;
    padding: 15px 20px;
    border: 4px solid var(--tertiary-color);
    border-radius: 20px;

    background-color: transparent;

    font-size: 15px;
    font-family: inherit;
    color: inherit;

    &::placeholder {
      color: inherit;
    }
  }

  .red,
  .orange {
    padding: 10px 20px;
    border-radius: 10px;

    font-family: inherit;
    font-size: 24px;
    color: var(--quartery-color);

    cursor: pointer;
  }

  .red {
    background-color: var(--error-color);
  }
  .orange {
    background-color: var(--tertiary-color);
  }
`
