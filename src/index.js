import React from "react";
import ReactDOM from "react-dom";
import { PostContextProvider } from "./context/post-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/:category" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
