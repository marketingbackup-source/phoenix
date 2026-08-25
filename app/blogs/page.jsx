import { getPosts } from "@/services/cms/posts/get-posts";
import { getCategoryId } from "@/services/cms/categories/get-category-id";

import PostGrid from "@/components/Posts/PostGrid";


export default async function BlogsPage(){


  const categoryId =
    await getCategoryId("blogs");



  const posts =
    await getPosts({

      category:categoryId,

      perPage:12,

      embed:true,

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

            Latest <span className="text-[var(--color-red-3)]">
              Insights
            </span>

          </h1>


        </div>


        <PostGrid
          posts={posts}
        />


      </div>


    </section>

  );

}