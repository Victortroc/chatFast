import { useState } from "react";
import { Sidebar } from "../../pages/Home/components/Sidebar";
import { DefaultLayoutContainer } from "./styles";
import { Timeline } from "../../pages/Home/Timeline";
import { FormSubmit } from "../../pages/Home/components/FormSubmit";


export function DefaultLayout() {
  const [isHover, setIsHover] = useState(false);
  const [newInputPosts, setPosts] = useState([]);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <DefaultLayoutContainer data-state={`sidebar-${isHover ? "active" : ""}`}>
      <Sidebar isHover={isHover} setIsHover={setIsHover} />
      <FormSubmit addNewPost={addNewPost} />
      <Timeline newInputPosts={newInputPosts} />
    </DefaultLayoutContainer>
  )
}