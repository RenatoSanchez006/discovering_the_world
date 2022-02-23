import { useContext, useState } from "react";
import { postContext } from "../context/post-context";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Paper,
  Typography,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Delete, Edit, ForumOutlined } from "@mui/icons-material";
import ModalPost from "./ModalPost";

const PrevPost = ({ post }) => {
  const { deletePost } = useContext(postContext);
  const [modalOpen, setModalOpenState] = useState(false);

  const openModalHandler = () => {
    setModalOpenState(true);
  };

  const closeModalHanlder = () => {
    setModalOpenState(false);
  };

  return (
    <div>
      <Paper
        sx={{
          backgroundImage: `url(${post.img})`,
          height: 240,
          display: "flex",
          alignItems: "flex-end",
        }}
        elevation={3}
        square
      >
        <Grid container sx={{ p: 2 }}>
          <Grid item xs={12}>
            <Link
              component={RouterLink}
              underline="none"
              to={`/post/${post.id}`}
            >
              <Typography
                color={grey[50]}
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                {post.title}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link
              component={RouterLink}
              underline="none"
              to={`/post/${post.id}`}
            >
              <Typography color={grey[50]} variant="subtitle2">
                {post.description}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Typography color={grey[50]} variant="caption">
              {post.comments.length} Comments
            </Typography>
            <ForumOutlined sx={{ color: grey[50], fontSize: "large", ml: 1 }} />
          </Grid>
          <Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              color={grey[50]}
              sx={{
                typography: "subtitle2",
                fontFamily: "monospace",
                fontWeight: "medium",
              }}
            >
              [ {post.category} ]
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: grey[50] }} onClick={openModalHandler}>
              <Edit />
            </IconButton>
            <IconButton
              sx={{ color: grey[50] }}
              onClick={() => deletePost(post.id)}
            >
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <ModalPost
        data={post}
        isOpen={modalOpen}
        onClose={closeModalHanlder}
        isEdit={true}
      />
    </div>
  );
};

export default PrevPost;
