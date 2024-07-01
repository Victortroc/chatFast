import { PostButtonContainer, PostButtons, PostContainer, PostContent, PostFooter, Username } from "./styles"
import profileImg from "../../../../assets/profile-image.png"
import { BookmarkSimple, Chat, DeviceMobile, Heart, LineSegments, ShareFat } from "phosphor-react"

export function Post() {
  return (
    <PostContainer>
      <div>
        <img src={profileImg} alt="" />
      </div>
      <PostContent>
        <Username>
          <p>Joãozinho</p>
          <span>@jaodocarro</span>
        </Username>
        <p>
          Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias.
          <br/>
          <br/>
          Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev
        </p>
        <PostFooter>
          <PostButtons>
            <PostButtonContainer><Heart size={24} />10</PostButtonContainer>
            <PostButtonContainer><LineSegments size={24} />10</PostButtonContainer>
            <PostButtonContainer><Chat size={24} />10</PostButtonContainer>
          </PostButtons>
          <BookmarkSimple size={24} />
        </PostFooter>
      </PostContent>
    </PostContainer>
  )
}