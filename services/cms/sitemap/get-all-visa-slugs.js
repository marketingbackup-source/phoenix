import wordpressClient from "@/services/cms/wordpress-client";

export async function getAllVisaSlugs() {
  const perPage = 100;

  let page = 1;
  let totalPages = 1;

  const visaPrograms = [];

  do {
    const response = await wordpressClient.get(
      "/visa_programs",
      {
        params: {
          page,
          per_page: perPage,
          _fields: "slug,modified,date",
        },
      },
    );

    visaPrograms.push(
      ...response.data.map((visa) => ({
        slug: visa.slug,
        modified: visa.modified,
        date: visa.date,
      })),
    );

    totalPages = Number(
      response.headers["x-wp-totalpages"] || 1,
    );

    page += 1;
  } while (page <= totalPages);

  return visaPrograms;
}