import { notFound } from "next/navigation";

import { getPostBySlug } from "@/services/cms/posts/get-post-by-slug";

import BlogBanner from "@/components/Posts/BlogBanner";
import PostContentLayout from "@/components/Posts/PostContentLayout";


export default async function PressReleasePostPage({params}) {

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