export default function mapVisaProgram(post) {

  return {

    id: post.id,


    slug: post.slug,


    title:
      post.title?.rendered || "",


    excerpt:
      post.excerpt?.rendered || "",


    content:
      post.content?.rendered || "",


    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,


    date:
      post.date || null,


    modified:
      post.modified || null,


    tags:
      post._embedded?.["wp:term"]
        ?.flat()
        ?.filter(
          (term) => term.taxonomy === "post_tag"
        )
        ?.map((tag) => ({
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
        })) || [],


    acf:
      post.acf || {},

  };

}