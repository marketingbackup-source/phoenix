import PostCard from "./PostCard";


export default function PostGrid({
  posts=[],
  basePath="/blogs",
}) {

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-30-10
      "
    >
      {posts.map((post)=>(
        <PostCard
          key={post.id}
          post={post}
          basePath={basePath}
        />
      ))}
    </div>
  );
}