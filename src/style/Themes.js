import { createGlobalStyle} from "styled-components"



export const lightTheme = {
    
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#081229',
    }
    
    export const darkTheme = {
    background: '#2b081d',
    color: 'white',
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#081229',
    
    }


    export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
    `