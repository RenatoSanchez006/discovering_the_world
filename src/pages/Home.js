import Header from "../components/Header";
import Filter from "../components/Filter";
import PostList from "../components/PostList";
import ModalPost from "../components/ModalPost";
import { Fab } from "@mui/material";
import { useContext, useEffect } from "react";
import { postContext } from "../context/post-context";
import EditIcon from "@mui/icons-material/Edit";
import { deepOrange as orange } from "@mui/material/colors";

const Home = () => {
  const fabStyle = {
    backgroundColor: orange[400],
    color: "white",
    "&:hover": {
      bgcolor: orange[600],
    },
    position: "absolute",
    bottom: 20,
    right: 20,
  };

  return (
    <div>
      <Header />
      <Filter />
      <Fab sx={fabStyle}>
        <EditIcon />
      </Fab>
      <PostList />
      {/* <ModalPost view="Home"/> */}
    </div>
  );
};

export default Home;
