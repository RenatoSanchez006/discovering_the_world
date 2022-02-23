import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  FormLabel,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { grey } from "@mui/material/colors";
import { useContext, useState } from "react";
import { postContext } from "../context/post-context";

const ModalPost = ({ data, isOpen, onClose, isEdit }) => {
  const categories = require("../services/categories.json");
  const { register, handleSubmit, reset: resetForm } = useForm();
  const { addPost, editPost } = useContext(postContext);
  const [category, setCategoryState] = useState(data.category);

  const categoryHandler = (e, newCategory) => {
    if (newCategory !== null) {
      setCategoryState(newCategory);
    }
  };

  const onSubmitHandler = (formSubmitData) => {
    if (isEdit) {
      editPost({ ...data, ...formSubmitData, category: category });
    } else {
      addPost({ ...formSubmitData, category: category });
    }
    onModalCloseHandler();
  };

  const onModalCloseHandler = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onModalCloseHandler}
      fullWidth={true}
      maxWidth="xs"
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Let's add a new post</DialogContentText>
          <TextField
            required
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            defaultValue={data.title}
            {...register("title", { required: true })}
          />
          <TextField
            required
            margin="dense"
            label="Description"
            fullWidth
            variant="standard"
            defaultValue={data.description}
            {...register("description", { required: true })}
          />
          <Box sx={{ mt: 1.5 }}>
            <FormLabel>Category</FormLabel>
            <ToggleButtonGroup
              value={category}
              exclusive
              onChange={categoryHandler}
              size="small"
            >
              {categories.map((cat) => {
                return (
                  <ToggleButton key={cat.value} value={cat.label}>
                    {cat.label}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </Box>
          <TextField
            required
            margin="dense"
            label="URL of image"
            fullWidth
            variant="standard"
            defaultValue={data.img}
            {...register("img", { required: true })}
          />
          <TextField
            required
            label="Text"
            fullWidth
            variant="standard"
            multiline
            rows={4}
            defaultValue={data.text}
            {...register("text", { required: true })}
          />
          <Typography color={grey[500]} variant="caption">
            *Required
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onModalCloseHandler}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalPost;
