import { getPosts } from "@/services/cms/posts/get-posts";
import { getCategoryId } from "@/services/cms/categories/get-category-id";

import PostGrid from "@/components/posts/PostGrid";
import Pagination from "@/components/posts/Pagination";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogsPage({ searchParams }) {
  const categoryId = await getCategoryId("blogs");

  const resolvedSearchParams = await searchParams;

  const pageParam = resolvedSearchParams?.page;

  const currentPage = Math.max(1, parseInt(pageParam, 10) || 1);

  const { posts, totalPosts, totalPages, perPage } = await getPosts({
    category: categoryId,

    page: currentPage,

    perPage: 12,

    embed: true,
  });

  return (
    <section
      className="
      py-80-30
      bg-white
      "
    >
      <div className="container-main">
        <div
          className="
          text-center
          mt-18 lg:mt-12
          !mb-12
          "
        >
          <h1
            className="
            fs-52-32
            uppercase
            text-black
            "
          >
            Latest <span className="text-[var(--color-red-1)]">Insights</span>
          </h1>
        </div>

        <PostGrid posts={posts} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blogs"
        />
      </div>
    </section>
  );
}
