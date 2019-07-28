import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router'
import isActive from './isActive'


import { aqua, teal } from '../Utilities/index'
import { 
    ACLogo,
    SpeakerSVG, 
    ProgrammeSVG, 
    ExhibitorsSVG,
    LocationSVG,
    InfoSVG,
    ContactSVG,
} from '../Images/index'




class NavMenu extends Component {
    // constructor({ on, toggle }) {
    //     super({ on, toggle })
    //     this.state = {on}
    // }

    // componentDidMount() {
    //     document.addEventListener("mousedown", this.handleClick);
    // }
    // componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.handleClick);
    // }

    // handleClick = e => {
    //     if (this.node.contains(e.target)) { return; }
    //     this.handleClickOutside()
    // };

    // handleClickOutside = () => {
    //     this.setState(() => ({
    //         on: !this.state.on
    //     }));
    // };
    

    render() {
        const { on, toggle } = this.props

        return (
            <StyledNavWrappper
                className={on ? 'active' : null}
                // ref={node => this.node = node}
            >
                <nav >
                    <div>
                        <Link 
                            exact="true" 
                            to="/" 
                            getProps={isActive} 
                            onClick={on ? toggle : null} 
                        >
                            <ACLogo height="19px" color="white" navMenu />
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true" 
                            to="/speakers" 
                            getProps={isActive} 
                            onClick={on ? toggle : null}                         >
                            <SpeakerSVG height="21px" color="white" />
                            Speakers
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true"
                            to="/programme" 
                            getProps={isActive} 
                            onClick={on ? toggle : null}                         >
                            <ProgrammeSVG height="19px" color="white" />
                            Programme
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true" 
                            to="/exhibitors" 
                            getProps={isActive} 
                            onClick={on ? toggle : null}                         >
                            <ExhibitorsSVG height="20px" color="white" />
                            Exhibitors
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true" 
                            to="/venue-map" 
                            getProps={isActive}
                            onClick={on ? toggle : null}                         >
                            <LocationSVG height="20px" color="white" />
                            Map
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true" 
                            to="/about" 
                            getProps={isActive}
                            onClick={on ? toggle : null}                         >
                            <InfoSVG height="19px" color="white" />
                            About
                        </Link>
                    </div>
                    <div>
                        <Link 
                            exact="true"
                            to="/contact" 
                            getProps={isActive}
                            onClick={on ? toggle : null}                         >
                            <ContactSVG height="22px" color="white" />
                            Contact
                        </Link>
                    </div>
                    
                </nav>
            </StyledNavWrappper>
        )
    }
}



const StyledNavWrappper = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 20px;
    padding-bottom: 60px;
    margin-bottom: 51.5px;
    overflow: auto;
    visibility: hidden;
    height: cal(100vh - 55px);
    z-index: -99999;
    background: ${teal};
    clip-path: circle(0% at 101% 96vh);
    transition: all .6s ease;
    cursor: none;
    &.active,
    &[aria-current] {
        clip-path: circle(110% at 30% 50vh);
        visibility: visible;
        cursor: auto;
        z-index: 99;
    }
    > nav {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-gap: 10px;
        padding: 15px;
        margin: 0;
    }
    > nav div {
        width: calc(100%);
    }
    > nav div a {
        line-height: 1.7rem;
        font-size: 1.1rem;
        display: grid;
        align-items: center;
        align-content: center;
        justify-items: start;
        grid-template-columns: 40px 1fr;
        /* height: 100%; */
        /* width: calc(100vw - 40px); */
        padding: 15px;
        padding-left: 25px;
        font-weight: 400;
        color: white;
        text-decoration: none;
        @media (max-height: 600px) {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    };
    > nav div a:hover,
    > nav div a[aria-current]:hover {
        color: white;
        background: ${aqua};
        border-radius: 20px;
        font-weight: 600;
    };
    > nav div a.active,
    > nav div a[aria-current] {
        background: ${teal};
        color: white;
        border: 2px solid ${aqua};
        border-radius: 20px;
        font-weight: 600;
    };
    a.active svg,
    a.active svg .st2, 
    a.active svg .st3, 
    a.active svg .st4, 
    a.active svg .st5, 
    a.active svg .st6, 
    a.active svg .st7,
    a[aria-current] svg,
    a[aria-current] svg .st2, 
    a[aria-current] svg .st3, 
    a[aria-current] svg .st4, 
    a[aria-current] svg .st5, 
    a[aria-current] svg .st6, 
    a[aria-current] svg .st7 {
        fill: ${aqua};
    }
    a.active:hover svg,
    a.active:hover svg .st2, 
    a.active:hover svg .st3, 
    a.active:hover svg .st4, 
    a.active:hover svg .st5, 
    a.active:hover svg .st6, 
    a.active:hover svg .st7,
    a[aria-current]:hover svg,
    a[aria-current]:hover svg .st2, 
    a[aria-current]:hover svg .st3, 
    a[aria-current]:hover svg .st4, 
    a[aria-current]:hover svg .st5, 
    a[aria-current]:hover svg .st6, 
    a[aria-current]:hover svg .st7 {
        fill: white;
    }

    /* Above - Larger screens / laptop / desktop */
    @media (min-width: 450px) {
        position: absolute;
        top: 80px;
        max-width: 600px;
        height: auto;
        bottom: auto;
        left: auto;
        overflow: hidden;
        padding: 0;
        z-index: 99999999;
        border-radius: 20px;
        clip-path: circle(0% at 101% 0);
        overflow: none;
        box-shadow: 0 2px 13px 0 rgba(13,0,76,0.2), 0 5px 25px 0 rgba(13,0,76,0.05);
        &.active {
            clip-path: circle(100% at 50% 50%);
        }
        > nav {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-auto-flow: column;
            grid-auto-columns: 1fr 1fr;
            grid-gap: 10px;
        }
    }
    @media (max-width: 600px) and (min-width: 450px)   {
        width: auto;
        position: fixed;
        left: 10px;
    }
    @media (max-width: 970px) {
        right: 10px;
    }
`

export default NavMenu