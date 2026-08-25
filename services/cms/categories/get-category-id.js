import wordpressClient from "@/services/cms/wordpress-client";


export async function getCategoryId(slug) {

  if(!slug){
    return null;
  }


  const response = await wordpressClient.get(
    "/categories",
    {
      params:{
        slug,
      },
    }
  );


  console.log("CATEGORY LOOKUP:", {
    requestedSlug:slug,
    response:response.data,
  });


  return response.data?.[0]?.id ?? null;

}