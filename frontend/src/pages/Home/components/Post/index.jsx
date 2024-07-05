import React, { useEffect, useState, forwardRef } from 'react';
import { PostButtonContainer, PostButtons, PostContainer, PostContent, PostFooter, Username } from './styles';
import profileImg from '../../../../assets/profile-image.png';
import { BookmarkSimple, Chat, Heart, LineSegments } from 'phosphor-react';

const Post = forwardRef(({ post, $show }, ref) => {
  const [mediaUrls, setMediaUrls] = useState([]);
  const apiBackend = import.meta.env.VITE_BACKEND;

  // console.log("Show: ", $show);

  useEffect(() => {
    if (post.mediaUrls) {
      setMediaUrls(post.mediaUrls.map(media => `${apiBackend}${media}`));
    }
  }, [post.mediaUrls, apiBackend]);

  return (
    <PostContainer ref={ref} id={post._id} $show={$show}>
      <div>
        <img src={profileImg} alt="" className="profile" />
      </div>
      <PostContent>
        <Username>
          <p>{post.username}</p>
          <span>@{post.username}</span>
        </Username>
        <p>{post.content}</p>
        {mediaUrls.map((media, index) => (
          <img key={index} src={media} alt={`media-${index}`} className="media" />
        ))}
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
  );
});

export default Post;
