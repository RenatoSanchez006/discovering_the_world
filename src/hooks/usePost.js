import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const usePost = () => {
  const mockData = require("../services/data.json");
  const [postList, setPostListState] = useState(mockData);

  const addPost = (postData) => {
    const newPost = {
      ...postData,
      comments: [],
      id: uuidv4(),
    };
    setPostListState([...postList, newPost]);
  };

  const editPost = (postData) => {
    const postIndex = postList.findIndex((post) => post.id === postData.id);
    const postListCopy = [...postList];
    postListCopy[postIndex] = { ...postData };
    setPostListState(postListCopy);
  };

  const deletePost = (id) => {
    const postCopy = [...postList.filter((post) => post.id !== id)];
    setPostListState(postCopy);
  };

  const filterPosts = (category) => {
    if (category) {
      return postList.filter((post) => post.category === category);
    }
    return postList;
  };

  const getPost = (id) => {
    return postList.filter((post) => post.id === id)[0];
  };

  const getPostComments = (id) => {
    return postList.filter((post) => post.id === id)[0].comments;
  };

  const addComment = (data, postId) => {
    const postListCopy = [...postList];
    const postIndex = postListCopy.findIndex((post) => post.id === postId);
    postListCopy[postIndex].comments.push(data);
    setPostListState(postListCopy);
  };

  return {
    postList,
    addPost,
    editPost,
    deletePost,
    filterPosts,
    getPost,
    getPostComments,
    addComment,
  };
};
