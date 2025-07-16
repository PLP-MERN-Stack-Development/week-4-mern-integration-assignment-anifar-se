import { useState } from "react";
import { postService } from "../services/api";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.createPost({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">Publish</button>
    </form>
  );
}
