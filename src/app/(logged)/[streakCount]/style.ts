'use client'

import styled from 'styled-components'

export const Container = styled.div`

`

export const Counter = styled.div`
    text-align: center;

    h1 { font-size: 100px; }

    h2 { font-size: 42px; }

    h3 { font-size: 24px; }

    @media screen and (max-width: 400px) {
        h1 { font-size: 80px; }

        h2 { font-size: 32px; }

        h3 { font-size: 20px; }
    }
`

export const StreakButtons = styled.div`
    margin-top: 25px;

    display: flex;
    justify-content: center;
    gap: 45px;

    div {
        width: 100px;
        height: 100px;
        border-radius: 50%;

        background-color: var(--secondary-color);
        cursor: pointer;
    }

    #less, #more {
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
            content: '';
            width: 50px;
            height: 7px;
            border-radius: 50px;
            
            display: inline-block;

            background-color: var(--tertiary-color);    
        }
    }

    #more {
        &::after {
            content: '';
            width: 50px;
            height: 7px;
            border-radius: 50px;
            
            transform: rotate(90deg);
            position: absolute;

            background-color: var(--tertiary-color);    
        }
    }

    @media screen and (max-width: 400px) {
        div {
            width: 75px;
            height: 75px;
        }

        #less::before,
        #more::before,
        #more::after {
            width: 40px;
            height: 5px;
        }
    }
`
