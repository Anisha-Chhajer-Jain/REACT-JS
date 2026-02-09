import { useState } from "react";

function Likebutton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>
      <p>Likes: {likes}</p>

      <button onClick={handleLike} disabled={liked}>
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default Likebutton;
