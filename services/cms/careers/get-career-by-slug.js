import wordpressClient from "@/services/cms/wordpress-client";

import { mapCareer } from "@/services/cms/careers/map-career";

export async function getCareerBySlug(slug) {
  if (!slug) {
    return null;
  }

  const response = await wordpressClient.get("/careers", {
    params: {
      slug,
      status: "publish",
    },
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });

  if (!response.data?.length) {
    return null;
  }

  return mapCareer(response.data[0]);
}