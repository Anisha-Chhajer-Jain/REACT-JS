import Likebutton from "./Likebutton";

function Post() {
  return (
    <div style={{ border: "1px solid black", padding: "15px", width: "250px" }}>
     <h3>Like the post asapppp</h3>
      <Likebutton initialLikes={202007} />
    </div>
  );
}

export default Post;
