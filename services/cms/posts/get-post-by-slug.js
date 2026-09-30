import { getPosts } from "@/services/cms/posts/get-posts";

import { getTagsByIds } from "@/services/cms/tags/get-tags";

export async function getPostBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    throw new Error("A valid post slug is required.");
  }

  const { posts } = await getPosts({
    slug,

    perPage: 1,

    embed: true,
  });

  const post = posts[0] ?? null;

  if (!post) {
    return null;
  }

  const tags = await getTagsByIds(post.tags);

  return {
    ...post,

    tags,
  };
}
