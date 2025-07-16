import { useState, useEffect } from "react";
import { postService } from "../services/api";

export const usePosts = (page = 1, limit = 10) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    postService.getAllPosts(page, limit)
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { posts, loading, error };
};
