function extractImages(content = "") {
  const imageRegex = /<img[^>]+src="([^">]+)"/g;

  const images = [];

  let match;

  while ((match = imageRegex.exec(content)) !== null) {

    let imageUrl = match[1];


    // Convert WordPress generated sizes to original image
    imageUrl = imageUrl.replace(
      /-\d+x\d+(?=\.(jpg|jpeg|png|webp))/,
      ""
    );


    images.push(imageUrl);
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
