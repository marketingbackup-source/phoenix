import wordpressClient from "@/services/cms/wordpress-client";
import { mapPost } from "@/services/cms/posts/map-post";


export async function getPosts({
  page = 1,
  perPage = 10,
  slug,
  search,
  category,
  embed = false,
} = {}) {

  const params = {
    page,
    per_page:perPage,
  };


  if(slug){
    params.slug = slug;
  }


  if(search){
    params.search = search;
  }


  if(category){
    params.categories = category;
  }


  if(embed){
    params._embed = true;
  }


  console.log("GET POSTS REQUEST:", {
    category,
    params,
  });


  const response = await wordpressClient.get(
    "/posts",
    {
      params,
    }
  );


  console.log(
    "GET POSTS RESPONSE:",
    response.data.map((post)=>({
      id:post.id,
      slug:post.slug,
      title:post.title?.rendered,
      categories:post.categories,
    }))
  );


  return response.data.map(mapPost);

}