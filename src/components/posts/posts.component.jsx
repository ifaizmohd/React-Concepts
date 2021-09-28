import React, { useEffect, useState } from "react";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let postData = await data.json();
      setPosts(postData);
    };
    console.log("Post Component Renered!!");
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostComponent;
