import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'
import { cyan } from '../Utilities/index'


// const AnyReactComponent = ({text}) => <div>{text}</div>;

const GoogleMap = (props) => {
  const [center, setCenter] = useState({lat: 51.5201, lng: -0.10717, });
  const [zoom, setZoom] = useState(15.7);
  return (
    <div style={{ height: '400px', width: '100%', borderRadius: "20px",}}>
      <StyledGoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyASIQeYCSwhrSA4CImDit3unoLO5HGT-IE' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <Marker
        lat={center.lat}
        lng={center.lng}
        text="My Marker"
      />
      </StyledGoogleMapReact>
    </div>
  );
}

const StyledGoogleMapReact = styled(GoogleMapReact)`
  /* z-index: 9999999; */
`

const Marker = (props) => {
  const { name  /*, id*/ } = props;
  return (
    // <StyledMarker
    //   title={name}
    // />
    <Styled>
      <div
        className="pin bounce"
        title={name}
      />
      <div className="pulse" />
    </Styled>
  );
};


const Styled = styled.div`
.pin {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: ${cyan};
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -30px 0 0 -8px;
  cursor: pointer;
}
.pin:after {
  content: "";
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  background: white;
  position: absolute;
  border-radius: 50%;
}

.bounce {
  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;
}

.pulse {
  /* background: #d6d4d4; */
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  /* margin: 11px 0px 0px -12px; */
  transform: rotateX(55deg);
  z-index: -2;
}
.pulse:after {
  content: "";
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  margin: -13px 0 0 -13px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
  box-shadow: 0 0 1px 2px ${cyan};
  animation-delay: 1.1s;
}

@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(-2000px) rotate(-45deg);
  }

  60% {
    opacity: 1;
    transform: translateY(30px) rotate(-45deg);
  }

  80% {
    transform: translateY(-10px) rotate(-45deg);
  }

  100% {
    transform: translateY(0) rotate(-45deg);
  }
}

`


// const StyledMarker = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background: red;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   cursor: pointer;
//   user-select: none;
//   transform: translate(-50%, -50%);
//   &:hover {
//     z-index: 1;
//   }
// `

export default GoogleMap;