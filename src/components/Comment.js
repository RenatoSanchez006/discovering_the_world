import { Avatar, Grid, Typography } from "@mui/material";

const Comment = ({ comment }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Avatar />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6">
          {comment.user}
        </Typography>
        <Typography color="gray" variant="subtitle2">
          {comment.comment}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Comment;
