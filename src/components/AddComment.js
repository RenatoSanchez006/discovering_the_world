import { Button, TextField } from "@mui/material";
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
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        size="small"
        placeholder="user"
        variant="standard"
        {...register("user", { required: true })}
      />
      <TextField
        size="small"
        placeholder="Enter your comment"
        variant="standard"
        {...register("comment", { required: true })}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddComment;
