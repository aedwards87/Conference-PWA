import React from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router";
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


const NavMenu = ({ on, toggle }) => (
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
                    <ACLogo height="1.2rem" color="white" />
                    Home
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
            <div>
                <Link 
                    exact 
                    to="/contact" 
                    getProps={isActive}
                    onClick={toggle} 
                >
                    <ContactSVG height="1.4rem" color="white" />
                    Branches
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
                    Notifications
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
                    My Conference
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
                    Networking
                </Link>
            </div>
            
        </nav>
    </StyledNavWrappper>
)

const StyledNavWrappper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 60px;
    margin-bottom: 30px;
    overflow: scroll;
    width: 100%;
    height: cal(100% - 55px);
    padding-top: 30px;
    z-index: 99998;
    background: ${teal};
    clip-path: circle(0px at 101% 94vh);
    transition: all .6s ease;
    &.active {
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
        justify-content: start;
        grid-template-columns: 35px 1fr;
        height: 100%;
        width: calc(100% - 20px);
        padding: 20px;
        padding-left: 30px;
        font-weight: 400;
        color: white;
        text-decoration: none;
        @media (max-height: 600px) {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    };
    > nav div a:hover {
        color: white;
        background: ${aqua};
        border-radius: 30px;
        font-weight: 600;
    };
    > nav div a.active,
    > nav div a[aria-current] {
        color: white;
        border: 3px solid ${aqua};
        border-radius: 30px;
        font-weight: 600;
    };
    a[aria-current] svg,
    a[aria-current] svg .st2, 
    a[aria-current] svg .st3, 
    a[aria-current] svg .st4, 
    a[aria-current] svg .st5, 
    a[aria-current] svg .st6, 
    a[aria-current] svg .st7 {
        fill: ${aqua};
    }
    a[aria-current]:hover svg,
    a[aria-current]:hover svg .st2, 
    a[aria-current]:hover svg .st3, 
    a[aria-current]:hover svg .st4, 
    a[aria-current]:hover svg .st5, 
    a[aria-current]:hover svg .st6, 
    a[aria-current]:hover svg .st7 {
        fill: white;
    }
`

export default NavMenu