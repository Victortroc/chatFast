import { useState } from "react";
import { Sidebar } from "../../pages/Home/components/Sidebar";
import { DefaultLayoutContainer } from "./styles";
import { Timeline } from "../../pages/Home/Timeline";


export function DefaultLayout() {
  const [isHover, setIsHover] = useState(false);

  return (
    <DefaultLayoutContainer data-state={`sidebar-${isHover ? "active" : ""}`}>
      <Sidebar isHover={isHover} setIsHover={setIsHover} />
      <Timeline />
    </DefaultLayoutContainer>
  )
}