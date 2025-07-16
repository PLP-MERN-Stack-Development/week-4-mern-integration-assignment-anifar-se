import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
const [page, setPage] = useState(1);
const { posts } = usePosts(page, 10);

<button onClick={() => setPage(page + 1)}>Next</button>
<button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous</button>


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
