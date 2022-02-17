import { createContext } from "react";
import { usePost } from "../hooks/usePost";

export const postContext = createContext({
  postList: [],
});

export const PostContextProvider = ({ children }) => {
  const contextValue = usePost();

  return (
    <postContext.Provider value={contextValue}>{children}</postContext.Provider>
  );
};
