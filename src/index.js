import React from "react";
import ReactDOM from "react-dom";
import { PostContextProvider } from "./context/post-context";
import Post from "./pages/Post";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
//Aqui va mi contexto y mi router

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
