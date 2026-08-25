export default function mapVisaProgram(post){

    return {

        id: post.id,

        slug: post.slug,


        title:
            post.title?.rendered || "",


        excerpt:
            post.excerpt?.rendered || "",


        content:
            post.content?.rendered || "",



        image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,

    };

}