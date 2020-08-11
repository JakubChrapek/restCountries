import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: ${({ width }) => (width ? width : "1440px")};
  max-width: 100%;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  padding: ${({ padding }) => (padding ? padding : "30px 60px")};
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
`

const Container = ({
  children,
  padding,
  margin,
  width,
  justifyContent,
  alignItems,
}) => (
  <StyledContainer
    padding={padding}
    margin={margin}
    width={width}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </StyledContainer>
)

export default Container
