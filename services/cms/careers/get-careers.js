import wordpressClient from "@/services/cms/wordpress-client";

import { mapCareer } from "@/services/cms/careers/map-career";

export async function getCareers({
  onlyOpen = true,
} = {}) {
  const response = await wordpressClient.get("/careers", {
    params: {
      per_page: 100,
      status: "publish",
      order: "desc",
      orderby: "date",

      // Temporary cache-buster for debugging
      _t: Date.now(),
    },
  });

  console.log(
    "RAW CAREERS FROM WORDPRESS:",
    response.data.map((post) => ({
      id: post.id,
      title: post.title?.rendered,
      status: post.status,
      jobStatus: post.acf?.job_status,
      displayOrder: post.acf?.display_order,
    }))
  );

  let careers = response.data
    .map(mapCareer)
    .filter(Boolean);

  console.log("MAPPED CAREERS:", careers);

  if (onlyOpen) {
    careers = careers.filter(
      (career) => career.jobStatus === "open"
    );
  }

  console.log("OPEN CAREERS:", careers);

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