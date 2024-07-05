import { useState, useEffect, useRef, useCallback } from "react";
import { TimeLine, TimeLineMain } from "./styles";
import usePost from "../../../hooks/usePost";
import Post from "../components/Post";

export function Timeline({ newInputPosts }) {
  const [page, setPage] = useState(1);
  const { list } = usePost();
  const [visiblePosts, setVisiblePosts] = useState({});
  const [posts, setPosts] = useState([]);
  const observer = useRef(null);
  const postRefs = useRef([]);
  const lastObserver = useRef([]);
  const [entryStored, setEntryStored] = useState({});
  const [forceUpdate, setForceUpdate] = useState(false);


  const handleIntersection = (entries) => {
    const newVisiblePosts = { ...visiblePosts };
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        newVisiblePosts[entry.target.id] = true;
        observer.current.unobserve(entry.target); 
      }
    });

    setVisiblePosts(prevVisiblePosts => ({ ...prevVisiblePosts, ...newVisiblePosts }));
  };


  const handleLastIntersection = async (entries) => {
    entries.forEach(entry => {
      const entryId = entry.target.id;

      if (entryStored[entryId]) {
        lastObserver.current.unobserve(entry.target);
        return;
      }

      if (entry.isIntersecting) {
        setEntryStored(prevEntryStored => ({ ...prevEntryStored, [entryId]: true }));
        setPage(prevPage => prevPage + 1);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, { 
      threshold: 0.5 
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    lastObserver.current = new IntersectionObserver(handleLastIntersection, { 
      threshold: 0.5 
    });

    return () => {
      if (lastObserver.current) {
        lastObserver.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await list(page);
        if (response.length === 0) {
          lastObserver.current.disconnect();
          observer.current.disconnect();
          setForceUpdate(true);
        } else {
          setPosts((prevPosts) => ([...prevPosts, ...response]));
        }
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    };
  
    fetchPosts();
  }, [page]);

  useEffect(() => {

    if (postRefs.current.length > 0) {
      postRefs.current.forEach((element, index) => {
        if (element) {
          observer.current.observe(element);
          if (index === postRefs.current.length - 1) {
            lastObserver.current.observe(element);
          }
        }
      });
    }
  
    return () => {
      if (postRefs.current.length > 0) {
        postRefs.current.forEach((element, index) => {
          if (element) {
            observer.current.unobserve(element);
            if (index === postRefs.current.length - 1) {
              lastObserver.current.unobserve(element);
            }
          }
        });
      }
    };
  }, [posts, forceUpdate]);

  useEffect(() => {
    setPosts((prevPosts) => [...newInputPosts, ...prevPosts]);
  }, [newInputPosts]);

  return (
    <TimeLine>
      <TimeLineMain>
        {posts.length ? (
          posts.map((post, index) => (
            <Post
              key={`${post._id}-${index}`}
              id={post._id}
              post={post}
              $show={visiblePosts[post._id] || false}
              ref={el => {
                if (el) {
                  postRefs.current[index] = el;
                }
              }}
            />
          ))
        ) : (
          <p>Não há posts ainda.</p>
        )}
      </TimeLineMain>
    </TimeLine>
  );
}
