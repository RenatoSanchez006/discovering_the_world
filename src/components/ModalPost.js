import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const ModalPost = () => {
  return (
    <Dialog
      open={true}
      // onClose={f}
      fullWidth={true}
      maxWidth="xs"
    >
      <form
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let's add a new user, every field is required but the Profile
            Picture
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={""}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={""}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={""}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="image"
            label="Profile Photo"
            type="text"
            fullWidth
            variant="standard"
            value={""}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Typography color={grey[500]} variant="caption">
            *Required
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={console.log("click")}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalPost;
