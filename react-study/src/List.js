import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = () => {
  const navigate = useNavigate(); // navigate
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://koreandummyjson.site/api/posts"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setLists(data.posts))
      .catch((error) => setError(`error data: ${error.message}`));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (lists.length === 0) {
    return <div>Loading...</div>;
  }

  const handlePostClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <ul className="listArea">
      {lists.map((post) => (
        <li key={post.id} onClick={() => handlePostClick(post.id)}>
          <div className="listHead">
            <p className="title">{post.title}</p>
            <p className="date">{post.createdAt}</p>
          </div>
          <div className="listBody">{post.content}</div>
        </li>
      ))}
    </ul>
  );
};
export default List;
