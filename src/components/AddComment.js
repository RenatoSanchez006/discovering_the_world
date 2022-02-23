import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { postContext } from "../context/post-context";

const AddComment = () => {
  const { id: postId } = useParams();
  const { addComment } = useContext(postContext);
  const { register, handleSubmit, reset: resetForm } = useForm();

  const onSubmitHandler = (data) => {
    addComment(data, postId);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} style={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <TextField
            fullWidth
            size="small"
            placeholder="Username"
            variant="standard"
            {...register("user", { required: true })}
          />
        </Grid>
        <Grid item sm={8}>
          <TextField
            fullWidth
            size="small"
            placeholder="Write a comment"
            variant="standard"
            {...register("comment", { required: true })}
          />
        </Grid>
        <Grid item sm={1}>
          <Button type="submit">Add</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddComment;
