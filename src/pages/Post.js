import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ListComments from "../components/ListComments";
import { postContext } from "../context/post-context";

const Post = () => {
  const { getPost } = useContext(postContext);
  const { id: postId } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    console.log("post mounted");
    setSinglePost(getPost(postId));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Typography>Title: {singlePost.title}</Typography>
        <Typography>Category: {singlePost.category}</Typography>
        <Typography>Description: {singlePost.description}</Typography>
      </div>
      <ListComments />
    </div>
  );
};

export default Post;
