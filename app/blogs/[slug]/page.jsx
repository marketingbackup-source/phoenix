import { notFound } from "next/navigation";

import { getPostBySlug } from "@/services/cms/posts/get-post-by-slug";

import BlogBanner from "@/components/posts/BlogBanner";
import PostContentLayout from "@/components/posts/PostContentLayout";


export default async function BlogPage({params}) {

  const {slug} = await params;

  const post = await getPostBySlug(slug);


  if(!post){
    notFound();
  }


  return (
    <>

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