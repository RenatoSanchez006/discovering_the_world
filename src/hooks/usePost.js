import { useEffect, useState } from "react";

export const usePost = () => {
  const [postList, setPostListState] = useState();

  useEffect(() => {
    setPostListState(require("../services/data.json"));
  }, []);

  const getPost = (id) => {
    return postList.filter((post) => post.id === id)[0]
  }

  return {
    postList,
    getPost,
  };
};
