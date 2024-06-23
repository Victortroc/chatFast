import { NewPost, NewPostButton, NewPostInput, TimeLine, TimeLineHeader, TimeLineMain } from "./styles";
import profileImg from "../../../assets/profile-image.png"

export function Timeline() {
  return(
    <TimeLine>
        <TimeLineHeader>
          <h1>Home</h1>
        </TimeLineHeader>
        <TimeLineMain>
          <NewPost>
            <div>
              <img src={profileImg} alt="" />
              <NewPostInput placeholder="O que está pensando?" />
            </div>

            <NewPostButton>
              Postar
            </NewPostButton>
          </NewPost>
        </TimeLineMain>
      </TimeLine>
  )
}