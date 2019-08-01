import styled from 'styled-components'


const Tag = styled.b`
  height: ${props => props.height ? props.height : '25px'};
  width: ${props => props.width ? props.width : '100px'};
  font-size: 0.6rem;
  font-weight: 600;
  background: ${props => 
      props.bgColor ? props.bgColor : 
      props.level ? props.level : 
      null
  };
  color: ${props => props.color ? props.color : 'white'};
  border-radius: 20px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-indent: .2rem;
  position: ${props => props.position ? props.position : 'absolute'};
  top: ${props => props.top ? props.top : '-20px'};
  right: ${props => props.right ? props.right : '20px'};
  box-shadow: 0 0px 2px 0 rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
  @media (min-width: 600px) {
    top: ${props => props.aboveTop ? props.aboveTop : '104px'};
    right: ${props => props.aboveRight ? props.aboveRight : 'auto'};
    left: ${props => props.aboveLeft ? props.aboveLeft : 'calc(50% - 50px)'};
  }
`

export default Tag
