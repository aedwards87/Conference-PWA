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


const StyledCurvedBG2 = styled.div`
  position: relative;
  overflow: hidden;
  top: 0;
  display: grid;
  justify-content: center;
  align-content: center;
  /* padding: 40px; */
  padding-top: -100px;
  padding-bottom: 50px;
  &::before {
    border-radius: 100%;
    position: absolute;
    background: ${props => props.bgColor};
    right: ${props => `-` + props.height / 7.5 + 'vw' };
    left: ${props => `-` + props.height / 7.5 + 'vw' };
    top: -50vh;
    bottom: 0;
    content: '';
    z-index: -1;
    margin-bottom: 20px;
    box-shadow: 0 5px 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
  };

`

const Head = styled.header`
  color: white;
  width: 100vw;
  height: 100%;
  padding: 80px 35px 35px;
  max-width: 800px; 
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    line-height: 4rem;
    font-weight: 200;
  };
  p {
    margin: 50px 0;
    padding: 0;
    font-weight: 350;
    width: 100%;
    line-height: 1.45rem;
    font-size: 1rem;
  };
  @media (max-width: 450px) {
    /* padding-top: calc(${props => props.padTop} - 25px); */

    h1 {
      font-size: 13vw;
    }
    p {
      margin: 40px 0px;
      line-height: 1.3rem;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 320px) { 
    h1 {font-size: 7vmax}
  }

`


export default CurvedBG2
