// import React from 'react'

// function Posts() {
//   return (
//     <div>
//       <p>hahahaahha</p>
//     </div>
//   )
// }

// export default Posts


import { useEffect, useState } from "react";

function Posts() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      setMessage(data.title);
    };

    fetchMessage();
  }, []);

  return <h3>Home: {message}</h3>;
}

export default Posts;
