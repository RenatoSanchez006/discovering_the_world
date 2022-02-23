import { Link as RouterLink } from "react-router-dom";
import { Link, Paper, Typography, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import ModalPost from "./ModalPost";
import { useContext, useState } from "react";
import { postContext } from "../context/post-context";

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
      <Paper sx={{ backgroundImage: `url(${post.img})`, height: 240 }} square>
        <Link component={RouterLink} underline="none" to={`/post/${post.id}`}>
          <Box sx={{ p: 2 }}>
            <Typography
              color={grey[50]}
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >
              {post.title}
            </Typography>
            <Typography color={grey[50]} variant="subtitle2">
              {post.description}
            </Typography>
            <Typography color={grey[50]} variant="caption">
              {post.comments.length} Comments
            </Typography>
            <Typography color={grey[50]} variant="body2">
              {post.category}
            </Typography>
          </Box>
        </Link>
        <IconButton sx={{ color: grey[50] }} onClick={openModalHandler}>
          <Edit />
        </IconButton>
        <IconButton
          sx={{ color: grey[50] }}
          onClick={() => deletePost(post.id)}
        >
          <Delete />
        </IconButton>
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
