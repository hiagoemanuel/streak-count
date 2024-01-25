import { type IThemeColors } from '@/contexts/theme/types'
import { createGlobalStyle } from 'styled-components'

export const Variables = createGlobalStyle<{ $theme: IThemeColors }>`
    :root {
        --primary-color: ${(p) => p.$theme.primaryColor};
        --secondary-color: ${(p) => p.$theme.secondaryColor};
        --tertiary-color: ${(p) => p.$theme.tertiaryColor};
        --text-color: ${(p) => p.$theme.textColor};
        --error-color: ${(p) => p.$theme.errorColor};
    }
`
