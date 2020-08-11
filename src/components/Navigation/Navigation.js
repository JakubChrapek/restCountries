import React from "react"
import styled from "styled-components"

// Our components
import Container from "../Container/Container"

const StyledNavigationWrapper = styled.nav`
  max-width: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.thick};
`

const Navigation = () => {
  return (
    <StyledNavigationWrapper>
      <Container padding="15px 60px">
        <StyledBrandHeader>Where in the world?</StyledBrandHeader>
        <SwitchThemeColorWrapper>
          <StyledButton>Dark Mode</StyledButton>
        </SwitchThemeColorWrapper>
      </Container>
    </StyledNavigationWrapper>
  )
}

export default Navigation
