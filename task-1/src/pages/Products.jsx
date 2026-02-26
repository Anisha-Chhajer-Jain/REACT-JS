// import React from 'react'

// function Products() {
//   return (
//     <div>
//       <p>hohohohohooooh</p>
//     </div>
//   )
// }

// export default Products


import { useEffect, useState } from "react";

function Products() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 5));
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <h3>Loading posts...</h3>;

  return (
    <>
      <h2>Posts</h2>
      {posts.map(post => (
        <h4 key={post.id}>{post.body}</h4>
        // <p key={post.body}></p>
      ))}
    </>
  );
}

export default Products;

