export function mapPost(post) {

  if(!post){
    return null;
  }


  return {

    id:post.id,

    slug:post.slug,

    title:post.title?.rendered ?? "",

    content:post.content?.rendered ?? "",

    excerpt:post.excerpt?.rendered ?? "",

    publishedAt:post.date ?? null,

    modifiedAt:post.modified ?? null,

    featuredMediaId:post.featured_media ?? null,

    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,

    categories:post.categories ?? [],

    tags:post.tags ?? [],

    acf:post.acf ?? {},

  };

}