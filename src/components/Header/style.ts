'use client'

import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        color: var(--tertiary-color);
    }

    @media screen and (max-width: 400px) {
        h2 {
            display: none;
        }
    }
`

export const ViewUser = styled.div`
    display: flex;
    align-items: last baseline;
    gap: 10px;
`
