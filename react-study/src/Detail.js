import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
const Detail = () => {
  const id = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `"https://thingproxy.freeboard.io/fetch/https://koreandummyjson.site/api/posts/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPost(data.post))
      .catch((error) => setError(`error data: ${error.message}`));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailArea">
      <div className="detailHead">
        <h1>{post.title}</h1>
        <p>{post.createdAt}</p>
      </div>
      <div className="detailBody">
        <p>{post.content}</p>
        <img src={post.imgUrl} alt={post.title} />
      </div>
    </div>
  );
};

export default Detail;
