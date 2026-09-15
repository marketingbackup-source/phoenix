import wordpressClient from "@/services/cms/wordpress-client";


export async function getFAQs(groupName) {

  if (!groupName || typeof groupName !== "string") {
    throw new Error("A valid FAQ group name is required.");
  }


  const normalizedGroupName =
    groupName.trim();


  const cacheBust =
    Date.now();


  /*
   * Find FAQ Group
   */

  const groupResponse =
    await wordpressClient.get(
      "/faq_group",
      {
        params: {
          search: normalizedGroupName,
          per_page: 100,
          _cacheBust: cacheBust,
        },

        headers: {
          "Cache-Control": "no-cache, no-store, max-age=0",
          Pragma: "no-cache",
        },
      }
    );


  const group =
    groupResponse.data.find(
      (item) =>
        item.name?.toLowerCase() ===
        normalizedGroupName.toLowerCase()
    );


  if (!group) {
    return [];
  }


  /*
   * Fetch FAQs belonging to this group
   */

  const response =
    await wordpressClient.get(
      "/faq",
      {
        params: {
          faq_group: group.id,
          per_page: 100,
          orderby: "menu_order",
          order: "asc",
          _cacheBust: cacheBust,
        },

        headers: {
          "Cache-Control": "no-cache, no-store, max-age=0",
          Pragma: "no-cache",
        },
      }
    );


  /*
   * Map WordPress response
   */

  return response.data.map(
    (faq) => ({
      id: faq.id,

      question:
        faq.title?.rendered || "",

      answer:
        faq.content?.rendered || "",

      order:
        faq.menu_order ?? 0,
    })
  );

}