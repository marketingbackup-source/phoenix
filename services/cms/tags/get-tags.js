import wordpressClient from "@/services/cms/wordpress-client";


export async function getTagsByIds(ids = []) {

  if (!ids.length) {
    return [];
  }


  const response = await wordpressClient.get("/tags", {

    params: {

      include: ids.join(","),

      per_page: 100,

      _cb: Date.now(),

    },

    headers: {

      "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",

    },

  });


  return response.data.map((tag) => ({

    id: tag.id,

    name: tag.name,

    slug: tag.slug,

  }));

}