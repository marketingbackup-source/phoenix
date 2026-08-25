import { getPosts } from "@/services/cms/posts/get-posts";
import { getCategoryId } from "@/services/cms/categories/get-category-id";

import PostGrid from "@/components/Posts/PostGrid";


export default async function PressReleasePage(){


  const categoryId =
    await getCategoryId("press-release");



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

            Press <span className="text-[var(--color-red-3)]">
              Release
            </span>

          </h1>


        </div>


        <PostGrid
          posts={posts}
          basePath="/press-release"
        />


      </div>


    </section>

  );

}