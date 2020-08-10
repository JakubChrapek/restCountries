import React from "react"
import styled from "styled-components"
import MoonLight from "../../assets/images/moon-light.svg"
import MoonDark from "../../assets/images/moon-dark.svg"

const StyledNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.elementsBg};
  box-shadow: 0px 2px 1px 0px ${({ theme }) => theme.colors.shadow};
`

const SwitchThemeColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`

const StyledBrandHeader = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
`

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.thick};
`

const Navigation = () => {
  return (
    <StyledNavigationWrapper>
      <StyledBrandHeader>Where in the world?</StyledBrandHeader>
      <SwitchThemeColorWrapper>
        <StyledButton>Dark Mode</StyledButton>
      </SwitchThemeColorWrapper>
    </StyledNavigationWrapper>
  )
}

export default Navigation
