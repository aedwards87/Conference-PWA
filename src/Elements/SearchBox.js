import React from 'react'
import styled from 'styled-components'

import { SearchSVG } from '../Images/index'


const SearchBox = ({ value, onChange, placeholder, phColor, color, colorSVG, height }) => {
  return (
    <SearchBoxContainer>
      <SearchSVG height={height} color={colorSVG} />
      <SearchBoxInput 
        type="text" 
        name="search" 
        onChange={onChange}
        value={value}
        tabIndex="0"
        placeholder={placeholder} 
        color={color}
      />
    </SearchBoxContainer>
  )
}


const SearchBoxContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 30px;
  background: white;
  height: 45px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0px 3px 0 rgba(13,0,76,0.03), 0 2px 5px 0 rgba(13,0,76,0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
`

const SearchBoxInput = styled.input`
  outline: none;
  border: 0;
  border-radius: 15px;
  background: transparent;
  width: 100%;
  color: ${props => props.color};
  position: absolute;
  left: 0;
  padding-left: 55px;
  &::placeholder {
    color: ${props => props.phColor};
  }
`


export default SearchBox
