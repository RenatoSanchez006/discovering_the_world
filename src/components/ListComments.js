import { Box } from "@mui/material";
import AddComment from "./AddComment";
import Comment from "./Comment";

const ListComments = ({ comments }) => {
  return (
    <Box>
      <Box sx={{my: 2}}>
        <AddComment />
      </Box>
      <Box sx={{my: 2}}>
        {comments && (
          <div>
            {comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ListComments;
