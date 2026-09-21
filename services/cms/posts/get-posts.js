import wordpressClient from "@/services/cms/wordpress-client";

import { mapPost } from "@/services/cms/posts/map-post";

export async function getPosts({
  page = 1,
  perPage = 10,
  slug,
  search,
  category,
  embed = false,
} = {}) {
  const params = {
    page,
    per_page: perPage,
    order: "desc",
    orderby: "date",

    // Prevent stale REST API/CDN responses
    _cb: Date.now(),
  };

  if (slug) {
    params.slug = slug;
  }

  if (search) {
    params.search = search;
  }

  if (category) {
    params.categories = category;
  }

  if (embed) {
    params._embed = true;
  }

  console.log("GET POSTS REQUEST:", {
    category,
    params,
  });

  const response = await wordpressClient.get("/posts", {
    params,

    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });

  console.log(
    "GET POSTS RESPONSE:",
    response.data.map((post) => ({
      id: post.id,
      slug: post.slug,
      date: post.date,
      modified: post.modified,
      status: post.status,
      categories: post.categories,
    })),
  );

  const posts = response.data.map(mapPost);

  const totalPosts = Number(
    response.headers["x-wp-total"] || 0,
  );

  const totalPages = Number(
    response.headers["x-wp-totalpages"] || 0,
  );

  return {
    posts,
    totalPosts,
    totalPages,
    currentPage: Number(page),
    perPage: Number(perPage),
  };
}