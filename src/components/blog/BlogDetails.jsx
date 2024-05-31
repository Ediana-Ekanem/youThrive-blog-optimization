import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

// Custom hook for fetching a post
const usePost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    } catch (err) {
      setError("Error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return { post, loading, error };
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = usePost(id);

  const handleBackClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

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
    <div className="bg-slate-500 pt-24 cursor-pointer min-h-screen">
      <FaArrowLeft
        onClick={handleBackClick}
        color="white"
        size={28}
        className="ms-3"
      />

      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-2xl shadow-lg rounded-lg p-8 bg-white">
          <h1 className="text-3xl text-center underline mb-3">{post.title}</h1>
          <p className="text-md">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
