import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import { size } from "polished";


const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
            
        }

        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    tertiaryButtonWarning: () => `
        background:none;
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
        background:none;
        border: 2px solid ${defaultTheme.status.warningColor};
        color: 2px solid ${defaultTheme.status.warningColor};
    `
}

const Button = styled.button`
    padding:12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius:2px;
    min-width:100px;
    cursor:pointer;
    font-family:"Roboto Mono", monospace;

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
        transition: background-color 0.2s linear, color 0.2s linear;
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        border-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary}
    }
`

const PrimaryButton = styled(Button)`
    background-color:${defaultTheme.primaryColor};
    border:none;
    color:white;

    &:disabled {
        background: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const SecondaryButton = styled(Button)`
    background:none;
    border : 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};

`

export const TertiaryButton = styled(Button)`
    background:none;
    border : none;
    color: ${defaultTheme.primaryColor};

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};

`

export default PrimaryButton