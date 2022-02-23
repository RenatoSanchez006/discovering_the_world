import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddComment from "./AddComment";
import Comment from "./Comment";

const ListComments = ({ comments }) => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", my: 2 }}>
      <Grid item sm={12}>
        <Typography
          color={grey[800]}
          align="center"
          variant="h5"
          fontWeight={"bold"}
        >
          Comments
        </Typography>
      </Grid>
      <Grid
        item
        sm={12}
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <AddComment />
      </Grid>
      <Grid
        item
        sm={12}
        sx={{ my: 1, display: "flex", justifyContent: "center" }}
      >
        {comments && (
          <div>
            {comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })}
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ListComments;
