import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postService } from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1>{post.title}</h1>
      <img src={`/uploads/${post.featuredImage}`} alt="" />
      <p>{post.content}</p>
    </div>
  );
}
