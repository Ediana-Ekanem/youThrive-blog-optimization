import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "./Card";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetching data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        setError("Error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleBlogDetails = useCallback(
    (id) => {
      navigate(`/blog/${id}`);
    },
    [navigate]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#4A90E2"} loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center mt-10 font-bold text-2xl pt-20">
        All <span className="text-violet-700">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-10 py-40 mx-auto justify-items-center max-w-7xl overflow-hidden">
        {posts.map((post) => (
          <MemoizedCard
            key={post.id}
            title={post.title}
            body={post.body}
            handleClick={() => handleBlogDetails(post.id)}
          />
        ))}
      </div>
    </>
  );
};

const MemoizedCard = React.memo(Card);

export default Blog;
