import wordpressClient from "@/services/cms/wordpress-client";

import { mapEvent } from "@/services/cms/events/map-event";

export async function getEvents({
  page = 1,

  perPage = 100,
} = {}) {
  const response = await wordpressClient.get("/events", {
    params: {
      page,

      per_page: perPage,

      order: "desc",

      orderby: "date",

      _cb: Date.now(),
    },

    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",

      Pragma: "no-cache",

      Expires: "0",
    },
  });

  return response.data.map(mapEvent);
}
