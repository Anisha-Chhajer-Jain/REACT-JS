// import { useDispatch, useSelector } from 'react-redux'
// import { incrementByOne, incrementByFive } from './features/CounterSlice.jsx'


// function App() {
//   const dispatch = useDispatch()
//   const { countOne, countFive } = useSelector((state) => state.counter)


//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Redux Toolkit Counter</h2>

//       <h3>Counter +1: {countOne}</h3>
//       <button onClick={() => dispatch(incrementByOne())}>Increment by 1</button>

//       <h3 style={{ marginTop: '20px' }}>Counter +5: {countFive}</h3>
//       <button onClick={() => dispatch(incrementByFive())}>Increment by 5</button>
//     </div>
//   )
// }


// export default App

import React from 'react'
import Child1 from './components/Child1.jsx'
import UserList from './components/UserList.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByFiveTime } from './features/counter/counterSlice.jsx'
import UserList2 from './components/UserList2.jsx'

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const count1 = useSelector((state) => state.counter.count1);

  const dispatch = useDispatch();

  function handleInc() {
    dispatch(increment());
  }
    function handleFiveInc() {
      dispatch(incrementByFiveTime());

    }
    return (
      <>
        <h2>Redux Toolkit Counter</h2>
        <h3>Counter +1: {count}</h3>
        <button onClick={handleInc}>Increment by 1</button>

        <h3 style={{ marginTop: '20px' }}>Counter +5: {count1}</h3>
        <button onClick={handleFiveInc}>Increment by 5</button>

        <Child1 />
        <UserList />
        <UserList2 />
      </>
    )
  }