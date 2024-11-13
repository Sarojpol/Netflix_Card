// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------------

// import React from "react";

// export const App = () => {
//   // return React.createElement("h1", null, "Thise is my first react code") ;
//   return (
//     <div>
//       <div>
//         <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
//       </div>
//       <h2>Name: Queen of Tears</h2>
//       <h3>Rating:8.2</h3>
//       <p>Queen of Tears is a much-awaited K-drama that is all set to debut on tvN on Saturday, March 9, 2024. The air time of the series is 9.10 p.m. KST. The series will also be available for streaming on Netflix.
//         The upcoming rom-com K-drama stars Kim Soo-Hyun as the male lead, Baek Hyun-Woo, and Kim Ji-Won as the female lead, Hong Hae-In.</p>
//     </div>
//   );
// };

//-----------------------------------------------------------------------


import NetflixSeries from "./componensts/NetflixSeries";
import "./componensts/Netflix.css";

export const App = () => {
  return (
  <section className="container">
    <h1 className="card-heading">List of All  Best Netflix Series</h1>
  <NetflixSeries />;
  </section>
  );
  };

