import wordpressClient from "@/services/cms/wordpress-client";

import { mapCareer } from "@/services/cms/careers/map-career";

export async function getCareers({
  onlyOpen = true,
} = {}) {
  const cacheVersion = Math.floor(Date.now() / 60000);

  const response = await wordpressClient.get("/careers", {
    params: {
      per_page: 100,
      status: "publish",
      order: "desc",
      orderby: "date",
      v: cacheVersion,
    },
  });

  let careers = response.data
    .map(mapCareer)
    .filter(Boolean);

  if (onlyOpen) {
    careers = careers.filter(
      (career) => career.jobStatus === "open"
    );
  }

  careers.sort((a, b) => {
    const orderDifference =
      a.displayOrder - b.displayOrder;

    if (orderDifference !== 0) {
      return orderDifference;
    }

    return a.title.localeCompare(b.title);
  });

  return careers;
}