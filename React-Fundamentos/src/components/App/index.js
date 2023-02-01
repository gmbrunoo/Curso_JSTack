import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import ThemeProvider from "../../context/ThemeContext";

import { Subtitle } from "./styles";

function App() {
  // hooks

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Subtitle#01",
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Subtitle#02",
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Subtitle#03",
      likes: 50,
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 10) + 10,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Subtitle as="h2">Posts da semana</Subtitle>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
