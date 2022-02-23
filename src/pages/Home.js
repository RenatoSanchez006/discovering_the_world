import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { deepOrange as orange } from "@mui/material/colors";
import Filter from "../components/Filter";
import PostList from "../components/PostList";
import ModalPost from "../components/ModalPost";
import { useState } from "react";

const Home = () => {
  const fabStyle = {
    backgroundColor: orange[400],
    color: "white",
    "&:hover": {
      bgcolor: orange[600],
    },
    position: "fixed",
    bottom: 20,
    right: 20,
    zindex: "tooltip",
  };

  const [modalOpen, setModalOpenState] = useState(false);
  const openModalHandler = () => {
    setModalOpenState(true);
  };

  const closeModalHanlder = () => {
    setModalOpenState(false);
  };

  return (
    <div>
      <Filter />
      <Fab sx={fabStyle} onClick={openModalHandler}>
        <EditIcon />
      </Fab>
      <PostList />
      <ModalPost
        data={require("../services/emptyPost.json")}
        isOpen={modalOpen}
        onClose={closeModalHanlder}
        isEdit={false}
      />
    </div>
  );
};

export default Home;
