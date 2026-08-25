import { getPosts } from "@/services/cms/posts/get-posts";

export async function getPostBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    throw new Error("A valid post slug is required.");
  }

  const posts = await getPosts({
    slug,
    perPage: 1,
    embed: true,
  });

  return posts[0] ?? null;
}