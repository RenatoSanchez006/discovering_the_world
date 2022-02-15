import Header from "./components/Header";
import Filter from "./components/Filter";
import PostList from "./components/PostList";
import { Button } from "@mui/material";
import ModalPost from "./components/ModalPost";

const Home = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Button>New Post</Button>
      <PostList />
      {/* <ModalPost /> */}
    </div>
  );
}

export default Home;
