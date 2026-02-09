import React, {useEffect} from 'react'

export default function Child1() {
    useEffect(()=>{
        console.log("Mounting happened using ")
    },[]);

  return (
    <div>
      <p>Mounting in Child 1 file first time</p>
    </div>
  )
}
