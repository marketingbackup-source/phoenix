import wordpressClient from "@/services/cms/wordpress-client";

export async function getAllPostSlugs({ category } = {}) {
  const perPage = 100;

  let page = 1;
  let totalPages = 1;

  const posts = [];

  do {
    const params = {
      page,
      per_page: perPage,
      _fields: "slug,modified,date",
    };

    if (category) {
      params.categories = category;
    }

    const response = await wordpressClient.get("/posts", {
      params,
    });

    posts.push(
      ...response.data.map((post) => ({
        slug: post.slug,
        modified: post.modified,
        date: post.date,
      })),
    );

    totalPages = Number(
      response.headers["x-wp-totalpages"] || 1,
    );

    page += 1;
  } while (page <= totalPages);

  return posts;
}