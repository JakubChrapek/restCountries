import React from "react"
import styled from "styled-components"

// Our Components
import Search from "./Search"
import Select from "./Select.js"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: 45px 60px;
`

const Controllers = () => {
  return (
    <StyledWrapper>
      <Search />
      <Select />
    </StyledWrapper>
  )
}

export default Controllers
