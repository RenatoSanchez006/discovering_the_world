import { Avatar, Grid, Typography, Box } from "@mui/material";

const Comment = ({ comment }) => {
  return (
    <Grid container spacing={6} sx={{ display: "flex", alignItems: "center" }}>
      <Grid item xs={2}>
        <Avatar />
      </Grid>
      <Grid item xs={10}>
        <Box>
          <Typography variant="h6">{comment.user}</Typography>
          <Typography color="gray" variant="subtitle2">
            {comment.comment}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Comment;
