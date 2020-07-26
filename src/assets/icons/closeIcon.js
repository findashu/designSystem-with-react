import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <path d="M501.66,10.34a8,8,0,0,0-11.32,0L256,244.69,35.16,23.84A8,8,0,0,0,23.84,35.16L244.69,256,10.34,490.34a8,8,0,0,0,11.32,11.32L256,267.31,476.84,488.16a8,8,0,0,0,11.32-11.32L267.31,256,501.66,21.66A8,8,0,0,0,501.66,10.34Z"/><text x="0" y="527" fill="#737581">Created by Iconsparks</text><text x="0" y="532" fill="#737581">from the Noun Project</text>
    </CloseIconWrapper>
);

