import React, { Component } from 'react'
import styled from 'styled-components' // S_ = Styled Component



class CurvedBG2 extends Component {
  constructor(props) {
    super(props);
    this.Myref = React.createRef(); 
    // <--- OLD syntax I beleive
  }

  state ={
    height: ''
  }

  componentDidMount = () => {
    console.log(this.Myref.current.clientHeight)
    this.setState({
      height: this.Myref.current.clientHeight
    })
   
  }

  render () {
    const { height } = this.state
    const { children, bgColor } = this.props

    return (
        <StyledCurvedBG2
          ref={this.Myref}
          height={height}
          bgColor={bgColor}
        >
          <Head>
            {children}
          </Head>
        </StyledCurvedBG2>
    )
  }
}

const Head = styled.header`
  color: white;
  width: 100%;
  height: 100%;
  padding: 40px;
  max-width: 700px; 
`

const StyledCurvedBG2 = styled.div`
  position: relative;
  overflow: hidden;
  top: 0;
  display: grid;
  justify-content: center;
  align-content: center;
  /* padding: 40px; */
  padding-top: -100px;
  padding-bottom: 100px;
  &::before {
    border-radius: 100%;
    position: absolute;
    background: ${props => props.bgColor};
    right: ${props => `-${props.height / 1.3}px`};
    left: ${props => `-${props.height / 1.3}px`};
    top: -50vh;
    bottom: 0;
    content: '';
    z-index: -1;
    margin-bottom: 20px;
    box-shadow: 0 5px 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
  }

`



export default CurvedBG2
