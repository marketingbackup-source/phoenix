import { notFound } from "next/navigation";

import { getPostBySlug } from "@/services/cms/posts/get-post-by-slug";
import { getMediaUrl } from "@/services/cms/media/get-media-url";

import BlogBanner from "@/components/posts/BlogBanner";
import PostContentLayout from "@/components/posts/PostContentLayout";



export async function generateMetadata({ params }) {


  const { slug } = await params;


  const post = await getPostBySlug(slug);



  if (!post) {

    return {};

  }



  const ogImage = await getMediaUrl(
    post.acf?.og_image
  );



  return {


    title:
      post.acf?.seo_title ||
      post.title,



    description:
      post.acf?.seo_description ||
      post.excerpt,



    keywords:
      post.tags?.map((tag) => tag.name) || [],



    alternates: {


      canonical:
        post.acf?.canonical_url ||
        `https://www.phoenixbusinessadvisory.com/press-releases/${slug}`,


    },



    openGraph: {


      title:
        post.acf?.og_title ||
        post.title,



      description:
        post.acf?.og_description ||
        post.excerpt,



      type: "article",



      images:

        ogImage?.url

          ? [
              {
                url: ogImage.url,
              },
            ]

          : [],


    },



    robots:

      post.acf?.robots ||

      "index, follow",



  };

}





export default async function PressReleasePostPage({ params }) {


  const { slug } = await params;



  const post = await getPostBySlug(slug);



  if (!post) {

    notFound();

  }



  return (

    <>

      {
        post.acf?.schema_script && (

          <div
            dangerouslySetInnerHTML={{
              __html: post.acf.schema_script,
            }}
          />

        )
      }



      <BlogBanner

        title={post.title}

        date={post.publishedAt}

      />



      <PostContentLayout

        content={post.content}

        image={post.featuredImage}

      />

    </>

  );

}