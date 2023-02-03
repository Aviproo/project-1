import { useState, useEffect } from "react";
import "./ApiHandler.css";
const Apihandler = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h4>{post.website}</h4>
            <div className="post-title">
              <p>
                <div>
                  Contact
                  <br />
                  {post.name}
                </div>
              </p>
            </div>

            <div className="post-title">
              <p>
                City <br />
                {post.address.city}
              </p>
            </div>
            <div className="post-title">
              <p>
                State <br />
                {post.address.street}
              </p>
            </div>
            <div className="post-title">
              <p>
                <button className="btn">Details</button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Apihandler;
