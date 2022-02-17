import { Link as RouterLink } from "react-router-dom";
import { Link, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

const PrevPost = ({ post }) => {
  return (
    <Paper sx={{ backgroundImage: `url(${post.img})`, height: 240 }} square>
      <Link component={RouterLink} underline="none" to={`/post/${post.id}`}>
        <Box sx={{ p: 2 }}>
          <Typography color={grey[50]} variant="h4" sx={{ fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <Typography color={grey[50]} variant="subtitle2">
            {post.description}{" "}
          </Typography>
          <Typography color={grey[50]} variant="caption">
            {post.comments.length} Comments
          </Typography>
          <Typography color={grey[50]} variant="body2">
            {post.category}{" "}
          </Typography>
        </Box>
      </Link>
    </Paper>
  );
};

export default PrevPost;
