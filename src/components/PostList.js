import { useContext } from "react";
import { postContext } from "../context/post-context";
import { Grid } from "@mui/material";
import PrevPost from "./PrevPost";

const PostList = () => {
  const { postList } = useContext(postContext);
  return (
    <Grid container>
      {postList &&
        postList.map((post) => {
          return (
            <Grid key={post.id} item xs={12} md={6}>
              <PrevPost post={post} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default PostList;
