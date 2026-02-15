// // // // // import { useState } from 'react'

// // // // // function App() {

// // // // //   const [counter, setcounter] = useState(60);

// // // // //   function stopWatch() {
// // // // //     setInterval(() => {
// // // // //       setcounter(prev => prev - 1);
// // // // //     }, 1000)
// // // // //     if (counter == 0) {
// // // // //       clearInterval();
// // // // //     }
// // // // //   }
// // // // //   return (
// // // // //     <>
// // // // //       <h1>Counter:-   {counter}</h1>
// // // // //       <button onClick={stopWatch}>Start</button>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // import React, { useEffect, useState } from "react";

// // // // const App = () => {
// // // //   const [second, setSecond] = useState(60); 
// // // //   const [isRunning, setIsRunning] = useState(false);

// // // //   useEffect(() => {
// // // //     let id = null;

// // // //     if (isRunning && second > 0) {
// // // //       id = setInterval(() => {
// // // //         setSecond((prev) => prev - 1);
// // // //       }, 1000);
// // // //     }

// // // //     if (second === 0) {
// // // //       setIsRunning(false);
// // // //     }

// // // //     return () => clearInterval(id);}
// // // //     ,[isRunning, second]);

// // // //   const TimerWatch = () => {
// // // //     let min = Math.floor(second / 60);
// // // //     let sec = second % 60;

// // // //     return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>Timer</h1>
// // // //       <h4>{TimerWatch()}</h4>

// // // //       <button onClick={() => setIsRunning(true)}>Start</button>
// // // //       <button onClick={() => setIsRunning(false)}>Pause</button>

// // // //       <button
// // // //         onClick={() => {
// // // //           setIsRunning(false);
// // // //           setSecond(60);
// // // //         }}
// // // //       >Reset</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;


// // // import React, { useEffect, useState } from "react";

// // // const App = () => {
// // //   const [second, setSecond] = useState(60);
// // //   const [isRunning, setIsRunning] = useState(false);

// // //   useEffect(() => {
// // //     if (!isRunning) return;

// // //     const id = setInterval(() => {
// // //       setSecond((prev) => {
// // //         if (prev === 0) {
// // //           setIsRunning(false);
// // //           clearInterval(id);
// // //           return 0;
// // //         }
// // //         return prev - 1;
// // //       });
// // //     }, 1000);

// // //     return () => clearInterval(id);
// // //   }, [isRunning]);

// // //   const formatTime = () => {
// // //     const min = Math.floor(second / 60);
// // //     const sec = second % 60;
// // //     return `${min.toString().padStart(2, "0")}:${sec
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Counter:</h1>
// // //       <h3>{formatTime()}</h3>

// // //       <button onClick={() => setIsRunning(true)}>Start</button>
// // //       <button onClick={() => setIsRunning(false)}>Pause</button>
// // //       <button onClick={() => {setIsRunning(false); setSecond(60);}}>Reset</button>
// // //     </div>
// // //   );
// // // };

// // // export default App;


// import React, { useEffect, useState } from "react";

// let initialValue=60;

// const App = () => {
//   const [seconds, setSeconds] = useState(initialValue);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let id;

//     if (isRunning && seconds > 0) {
//       id = setInterval(() => {
//         setSeconds((prev) => prev - 1);
//       }, 1000);
//     }

//     return () => clearInterval(id);
//   }, [isRunning, seconds]);

//   return (
//     <div>
//       <h1>Counter: {seconds}</h1>

//       <button onClick={() => setIsRunning(true)}>Start</button>
//       <button onClick={() => setIsRunning(false)}>Pause</button>

//       <button
//         onClick={() => {
//           setIsRunning(false);
//           setSeconds(initialValue);
//         }}
//       >Reset</button>
//     </div>
//   );
// };

// export default App;


// // import React, { useEffect, useState } from "react";

// // const App = () => {
// //   const [second, setSecond] = useState(0);
// //   const [isRunning, setIsRunning] = useState(false);

// //   useEffect(() => {
// //     let id = null;

// //     if (isRunning) {
// //       id = setInterval(() => {
// //         setSecond((prev) => prev + 1);
// //       }, 1000);
// //     }

// //     return () => {
// //       clearInterval(id);
// //     };
// //   }, [isRunning]);

// //   const TimerWatch = () => {
// //     let min=Math.floor(second / 60);
// //     let sec=second % 60;

// //     return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
// //   };

// //   return (
// //     <div>
// //       <h1>Timer</h1>
// //       <h4>{TimerWatch()}</h4>

// //       <button onClick={() => setIsRunning(true)}>Start</button>
// //       <button onClick={() => setIsRunning(false)}>Pause</button>

// //       <button
// //         onClick={() => {
// //           setIsRunning(false);
// //           setSecond(0);
// //         }}
// //       >
// //         Reset
// //       </button>
// //     </div>
// //   );
// // };

// // export default App;

import React, { useEffect, useState } from "react";

const COUNTDOWN_START = 60;

const App = () => {
  // Countdown states
  const [countdown, setCountdown] = useState(COUNTDOWN_START);
  const [isCountdownRunning, setIsCountdownRunning] = useState(false);

  // Stopwatch states
  const [stopwatch, setStopwatch] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (!isCountdownRunning || countdown === 0) return;

    const id = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isCountdownRunning, countdown]);

  // Stopwatch effect
  useEffect(() => {
    if (!isStopwatchRunning) return;

    const id = setInterval(() => {
      setStopwatch((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isStopwatchRunning]);

  return (
    <div>
      <h1>Timers</h1>

      <h2>Countdown: {countdown}</h2>
      <button onClick={() => setIsCountdownRunning(true)}>Start</button>
      <button onClick={() => setIsCountdownRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setIsCountdownRunning(false);
          setCountdown(COUNTDOWN_START);
        }}>Reset</button>
<br/><br/>
      <hr/>

      <h2>Stopwatch: {stopwatch}</h2>
      <button onClick={() => setIsStopwatchRunning(true)}>Start</button>
      <button onClick={() => setIsStopwatchRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setIsStopwatchRunning(false);
          setStopwatch(0);
        }}>Reset</button>
    </div>
  );
};

export default App;
