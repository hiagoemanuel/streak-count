'use client'

import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthForm = styled.form`
  width: 320px;
  padding: 50px 30px;
  border-radius: 50px;

  background-color: var(--secondary-color);
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 5px;

  h1 {
    font-size: 40px;
    margin-bottom: 5px;
  }
`

export const TextError = styled.div<{ $err: boolean }>`
  font-size: 12px;
  color: var(--error-color);
  visibility: ${(props) => (props.$err ? 'visible' : 'hidden')};
`

export const Credentials = styled.div`
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 15px 10px;
    border: 4px solid var(--tertiary-color);
    border-radius: 20px;

    font-family: inherit;
    color: var(--quartenary-color);

    background-color: transparent;

    &::-webkit-input-placeholder,
    &::placeholder {
      font-size: 15px;
      color: var(--quartenary-color);
    }
  }
`

export const PassSettings = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;

  font-size: 12px;

  label {
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 5px;

    color: var(--tertiary-color);
  }

  label:hover,
  input[type='checkbox']:hover,
  a:hover {
    text-decoration: underline;
    color: var(--tertiary-color);
    cursor: pointer;
  }

  input[type='checkbox'] {
    width: 12px;
    height: 12px;
    border: 2px solid var(--tertiary-color);
    border-radius: 3px;

    appearance: none;
    transition: 100ms;
  }

  input[type='checkbox']:checked {
    position: relative;
    background-color: var(--tertiary-color);

    &:before {
      content: '';
      position: absolute;
      top: 0.7px;
      right: 0px;

      width: 6px;
      height: 3px;

      border: 2px solid var(--secondary-color);
      border-top: none;
      border-right: none;

      transform: rotate(-45deg);
    }
  }
`

export const AuthSubmit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  a {
    width: 100%;
    padding: 10px;
    border-radius: 20px;

    cursor: pointer;

    text-align: center;
    font-size: 20px;
    font-family: inherit;
    color: var(--quartenary-color);
    background-color: var(--tertiary-color);
  }
`
