import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postContext } from "../context/post-context";
import { Grid } from "@mui/material";
import PrevPost from "./PrevPost";

const PostList = () => {
  const { category } = useParams();
  const { postList, filterPosts } = useContext(postContext);
  const [posts, setPosts] = useState(filterPosts);

  useEffect(() => {
    setPosts(filterPosts(category));
  }, [category, postList, filterPosts]);

  return (
    <Grid container>
      {posts &&
        posts.map((post) => {
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
