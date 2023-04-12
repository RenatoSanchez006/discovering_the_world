import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import ListComments from "../components/ListComments";
import { postContext } from "../context/post-context";
import DummyButton from "../components/DummyButton";

const Post = () => {
  const { id: postId } = useParams();
  const { getPost } = useContext(postContext);
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    setSinglePost(getPost(postId));
  }, []);

  return (
    <>
      <DummyButton message={"You are on Post"} color="red" />
      <Box
        sx={{
          backgroundImage: `url(${singlePost.img})`,
          height: 480,
          display: "flex",
          alignItems: "center",
        }}
        square
      >
        <Typography
          color={grey[50]}
          component="div"
          sx={{ width: "100%", textAlign: "center" }}
        >
          <Box sx={{ typography: "h2", fontWeight: "bold" }}>
            {singlePost.title}
          </Box>
          <Box
            sx={{
              typography: "subtitle2",
              fontFamily: "monospace",
              fontWeight: "medium",
            }}
          >
            [ {singlePost.category} ]
          </Box>
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          bgcolor: grey[200],
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Box sx={{ px: 10, py: 5, width: "100%", textAlign: "center" }}> */}
        <Grid item sm={12} sx={{ px: 10, py: 5 }}>
          <Typography component="div">
            <Grid
              sx={{
                typography: "body1",
                fontSize: "h6.fontSize",
                fontWeight: "medium",
                textAlign: "justify",
              }}
            >
              {singlePost.text}
            </Grid>
          </Typography>
          <Grid sm={12} item>
            <ListComments comments={singlePost.comments} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Post;
