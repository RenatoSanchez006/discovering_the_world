import { Typography } from "@mui/material";
import Post from "./Post";

const PostList = () => {
  const arrPost = [1, 2, 3];
  return (
    <div>
      <Typography>Post List</Typography>
      <div>
        {arrPost.map((item) => {
          return <Post id={item} item={item} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
