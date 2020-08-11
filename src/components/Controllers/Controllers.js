import React from "react"
import styled from "styled-components"

// Our Components
import Search from "./Search"
import Select from "./Select.js"
import Container from "../Container/Container"

const Controllers = () => {
  return (
    <Container padding="50px 60px">
      <Search />
      <Select />
    </Container>
  )
}

export default Controllers
