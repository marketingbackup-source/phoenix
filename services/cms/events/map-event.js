function extractImages(content = "") {
  const imageRegex = /<img[^>]+src="([^">]+)"/g;

  const images = [];

  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    images.push(match[1]);
  }

  return images;
}

export function mapEvent(event) {
  if (!event) {
    return null;
  }

  return {
    id: event.id,

    slug: event.slug,

    title: event.title?.rendered ?? "",

    images: extractImages(event.content?.rendered ?? ""),

    publishedAt: event.date ?? null,

    modifiedAt: event.modified ?? null,
  };
}
