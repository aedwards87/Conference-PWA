import React from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router";
import isActive from './isActive'
// import { Transition } from 'react-spring/renderprops'


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


const NavMenu = ({ on, toggle }) => (
    // <Transition 
    //     // native
    //     config={{
    //         tension: 100,
    //         friction: 20,
    //     }}
    //     items={on}
    //     // from={{  clipPath: 'circle(0vh at 101% 94vh)' }}
    //     // enter={{  clipPath: 'circle(100vh at 50% 50vh)' }}
    //     // leave={{ clipPath: 'circle(0vh at 101% 94vh)' }}
    //     from={{  opacity: 0 }}
    //     enter={{  opacity: 1 }}
    //     leave={{  opacity: 0 }}
    // >
    // {on => on && 
    // (props => (

        <StyledNavWrappper
            className={on ? 'active' : null}
        >
            <nav>
                <div>
                    <Link 
                        exact 
                        to="/" 
                        getProps={isActive} 
                        onClick={toggle} 
                    >
                        {}
                        <ACLogo height="1.2rem" color="white" navMenu />
                        Home
                    </Link>
                </div>
                <div>
                    <Link 
                        exact 
                        to="/speakers" 
                        getProps={isActive} 
                        onClick={toggle} 
                    >
                        <SpeakerSVG height="1.3rem" color="white" />
                        Speakers
                    </Link>
                </div>
                <div>
                    <Link 
                        exact
                        to="/programme" 
                        getProps={isActive} 
                        onClick={toggle} 
                    >
                        <ProgrammeSVG height="1.1rem" color="white" />
                        Programme
                    </Link>
                </div>
                <div>
                    <Link 
                        exact 
                        to="/exhibitors" 
                        getProps={isActive} 
                        onClick={toggle} 
                    >
                        <ExhibitorsSVG height="1.2rem" color="white" />
                        Exhibitors
                    </Link>
                </div>
                <div>
                    <Link 
                        exact 
                        to="/venue-map" 
                        getProps={isActive}
                        onClick={toggle} 
                    >
                        <LocationSVG height="1.25rem" color="white" />
                        Map
                    </Link>
                </div>
                <div>
                    <Link 
                        exact 
                        to="/about" 
                        getProps={isActive}
                        onClick={toggle} 
                    >
                        <InfoSVG height="1.1rem" color="white" />
                        About
                    </Link>
                </div>
                <div>
                    <Link 
                        exact 
                        to="/contact" 
                        getProps={isActive}
                        onClick={toggle} 
                    >
                        <ContactSVG height="1.4rem" color="white" />
                        Contact
                    </Link>
                </div>
                
            </nav>
        </StyledNavWrappper>
//     ))}
// </Transition>
)

const StyledNavWrappper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 60px;
    margin-bottom: 51.5px;
    overflow: scroll;
    width: 100%;
    height: cal(100% - 55px);
    padding-top: 30px;
    z-index: 99;
    background: ${teal};
    clip-path: circle(0% at 101% 94vh);
    transition: all .6s ease;
    &.active,
    &[aria-current] {
        clip-path: circle(100% at 30% 50vh);
    }
    > nav {
        display: grid;
        align-content: center;
        padding: 0;
        margin: 0;
    }
    > nav div {
        display: grid;
        justify-items: center;
    }
    > nav div a {
        display: grid;
        align-items: center;
        align-content: center;
        justify-items: start;
        grid-template-columns: 40px 1fr;
        height: 100%;
        width: calc(100% - 20px);
        padding: 20px;
        padding-left: 35px;
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
        border-radius: 30px;
        font-weight: 600;
    };
    > nav div a.active,
    > nav div a[aria-current] {
        background: ${teal};
        color: white;
        border: 3px solid ${aqua};
        border-radius: 30px;
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
        padding-bottom: 10px;
        padding-top: 10px;
        z-index: 99999999;
        border-radius: 20px;
        clip-path: circle(0% at 101% 0);
        overflow: none;
        box-shadow: 0 2px 13px 0 rgba(0,0,0,0.2), 0 5px 25px 0 rgba(0,0,0,0.05);
        &.active {
            clip-path: circle(100% at 50% 50%);
        }
        > nav {
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            grid-auto-flow: column;
            grid-auto-columns: 1fr 1fr;
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