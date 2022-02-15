import { Typography } from "@mui/material";
import Header from "./components/Header";
import ListComments from "./components/ListComments";

const FullPost = () => {
  return (
    <div>
      <Header />
      <div>
        <Typography>Post Title</Typography>
        <Typography>Post Text</Typography>
      </div>
      <ListComments />
    </div>
  );
}

export default FullPost;
