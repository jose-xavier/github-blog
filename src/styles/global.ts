import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smothing: antialiased
    }

    body, input, button, textarea {

        font: 400 1rem Nunito, sans-serif;
    }
`
