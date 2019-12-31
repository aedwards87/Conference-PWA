// import React from "react"

// import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

// const isActivePWA = ({ isCurrent }) => {
//   return isCurrent ? { className: "active" } : null
// }

// const isActive = props => (
//     <Link
//       {...props}
//       getProps={({ isCurrent }) => {
//           return {
//             className: isCurrent ? "active" : null
//           }
//       }}
//     >
//       {props.children}
//     </Link>
// )

export default isActive
