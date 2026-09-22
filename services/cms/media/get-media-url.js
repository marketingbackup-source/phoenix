import wordpressClient from "@/services/cms/wordpress-client";

export async function getMediaUrl(mediaId) {
  if (!mediaId) {
    return null;
  }

  try {
    const response = await wordpressClient.get(`/media/${mediaId}`, {
      params: {
        _fields: "source_url,alt_text",
      },
    });

    return {
      url: response.data?.source_url || null,
      alt: response.data?.alt_text || "",
    };
  } catch (error) {
    console.error("Failed to fetch WordPress media:", mediaId);

    return null;
  }
}