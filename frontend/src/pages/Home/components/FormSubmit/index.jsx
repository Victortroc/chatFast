import { useState, useEffect, useRef, useCallback } from "react";
import { Upload } from "phosphor-react";
import { FormSubmitMain, FormContainer, FormContainerInput, FormContainerButton } from "./styles";
import usePost from "../../../../hooks/usePost";
import { toast } from "react-toastify";
import profileImg from "../../../../assets/profile-image.png";

export function FormSubmit({ addNewPost }){
    const [postContent, setPostContent] = useState("");
    const [media, setPostContentMedia] = useState(null);
    const { create } = usePost();
    
    const handleInputChange = useCallback((e) => {
        setPostContent(e.target.value);
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPostContentMedia(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userId = JSON.parse(localStorage.getItem("user")).id;
    
        if (postContent || media) {
          const formData = new FormData();
          formData.append('userId', userId);
          formData.append('content', postContent);
    
          if (media) {
            formData.append('medias', media);
          }
    
          try {
            const newPost = await create(formData);
            // setPosts(prevPosts => [newPost, ...prevPosts]);
            addNewPost(newPost);
            setPostContent("");
            setPostContentMedia(null);
          } catch (error) {
            console.error("Erro ao criar post:", error);
            toast.error("Erro ao criar post!");
          }
    
        } else {
          toast.info("Adicione texto ou mídia!");
        }
    };

    return (

        <FormSubmitMain>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <div>
                    <img src={profileImg} alt="" />
                    <FormContainerInput
                        placeholder="O que está pensando?"
                        value={postContent}
                        onChange={handleInputChange}
                    />
                    </div>

                    <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <Upload />
                    </label>
                    <input
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    />

                    <FormContainerButton type="submit">
                    Postar
                    </FormContainerButton>
                </FormContainer>
            </form>
        </FormSubmitMain>

    )
};

