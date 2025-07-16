import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";

export default function Home() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div className="grid gap-4 p-4">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
