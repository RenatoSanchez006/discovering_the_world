import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import ListComments from "../components/ListComments";
import { postContext } from "../context/post-context";

const Post = () => {
  const { id: postId } = useParams();
  const { getPost } = useContext(postContext);
  const [singlePost, setSinglePost] = useState({});
  
  useEffect(() => {
    setSinglePost(getPost(postId));
  }, []);

  return (
    <div>
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
            [{singlePost.category}]
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: grey[200],
          display: "flex",
          alignItems: "center",
        }}
        square
      >
        {/* <Box sx={{ px: 10, py: 5, width: "100%", textAlign: "center" }}> */}
        <Box sx={{ px: 10, py: 5, width: "100%" }}>
          <Typography component="div">
            <Box
              sx={{
                typography: "body1",
                fontWeight: "medium",
                textAlign: "justify",
              }}
            >
              {singlePost.text}
            </Box>
          </Typography>
          <Box sx={{ width: "50%", my: 3 }}>
            <ListComments comments={singlePost.comments} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Post;
