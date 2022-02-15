import AddComment from "./AddComment";
import Comment from "./Comment";

const PostList = () => {
  const arrComments = [1, 2, 3];
  return (
    <div>
      <AddComment />
      <div>
        {arrComments.map((item) => {
          return <Comment id={item} item={item} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
