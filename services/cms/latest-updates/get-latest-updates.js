import wordpressClient from "@/services/cms/wordpress-client";


export async function getLatestUpdates({
  perPage = 3,
} = {}) {

  const response = await wordpressClient.get(
    "/latest-update",
    {
      params: {
        per_page: perPage,
        _embed: true,
      },

      headers: {
        "Cache-Control": "no-cache, no-store, max-age=0",
        Pragma: "no-cache",
      },
    }
  );


  return response.data.map((item) => ({

    id: item.id,

    title: item.title?.rendered || "",

    slug: item.slug || "",

    image:
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",

    link:
      item.acf?.blog_link || "",

  }));

}