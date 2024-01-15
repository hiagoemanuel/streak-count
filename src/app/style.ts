'use client'

import styled from 'styled-components'

export const RootLayoutContainer = styled.main`
  height: 100svh;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled.div`
  width: 400px;
  max-width: 100%;

  align-self: center;
`

export const SubHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const OrderList = styled.div`
  width: 30px;
  height: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  div {
    width: 100%;
    height: 3px;

    background-color: var(--tertiary-color);
  }
`

export const NewStreak = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;

    display: inline-block;

    background-color: var(--tertiary-color);
  }

  &::after {
    transform: rotate(90deg);
    position: absolute;
  }
`

export const StreakList = styled.div`
  height: 200px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 5px;

  a:last-child div {
    border-bottom: 3px solid transparent;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--tertiary-color);
  }
`

export const Streak = styled.div`
  padding: 10px;
  border-bottom: 3px solid var(--secondary-color);

  display: flex;
  justify-content: space-between;

  cursor: pointer;
  color: var(--quartenary-color);

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 22px;
    }
  }
`
