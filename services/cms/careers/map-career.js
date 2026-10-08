export function mapCareer(post) {
  if (!post) {
    return null;
  }

  const acf = post.acf || {};

  return {
    id: post.id,

    slug: post.slug,

    title: post.title?.rendered || "",

    content: post.content?.rendered || "",

    department: acf.department || "",

    location: acf.location || "",

    employmentType: acf.employment_type || "",

    experience: acf.experience || "",

    qualification: acf.qualification || "",

    jobStatus: acf.job_status || "",

    displayOrder: Number(acf.display_order) || 0,

    publishedAt: post.date || null,

    modifiedAt: post.modified || null,
  };
}