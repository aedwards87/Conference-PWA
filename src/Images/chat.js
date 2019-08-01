import React from "react"
import styled from 'styled-components' 

const ChatSVG = (props) => (
  <StyledChatSVG viewBox="0 0 32 32" x="0px" y="0px" height={props.height} color={props.color}  >
      <g>
        <path d="M16,26.19A12,12,0,0,1,3.87,14.35,12,12,0,0,1,16,2.5,12,12,0,0,1,28.13,14.35a11.79,11.79,0,0,1-4.05,8.84,1,1,0,0,1-1.32-1.51,9.75,9.75,0,0,0,3.37-7.33A10,10,0,0,0,16,4.5,10,10,0,0,0,5.87,14.35,10,10,0,0,0,16,24.19a1,1,0,0,1,0,2Z"></path>
        <path d="M25,28l-.2,0-9-1.81a1,1,0,0,1,.4-2l7.26,1.47-1-2.93a1,1,0,0,1,.63-1.27,1,1,0,0,1,1.27.63l1.54,4.57A1,1,0,0,1,25,28Z"></path>
        <ellipse cx="11.05" cy="14.35" rx="1.86" ry="1.81"></ellipse>
        <ellipse cx="16" cy="14.35" rx="1.86" ry="1.81"></ellipse>
        <ellipse cx="20.95" cy="14.35" rx="1.86" ry="1.81"></ellipse>
      </g>
  </StyledChatSVG>
)


const StyledChatSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
`

export default ChatSVG