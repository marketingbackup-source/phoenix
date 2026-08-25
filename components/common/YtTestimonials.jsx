"use client";


const videos = [
  "https://youtu.be/xjWF-BqoGKw?si=hGDjF14Pz9TZcUZF",
  "https://youtu.be/X54FB7cMnOY?si=W1Uv6QVXv0PNszeb",
  "https://youtu.be/2csqGgy__TM?si=455KMEPtkG5o5PHw",
  "https://youtu.be/X0Js3-YL4os?si=pzxqiVhONqMcq5es",
  "https://youtu.be/Ffaaa0q4BtI?si=gmieH3qwNeeFUmqV",
  "https://youtu.be/Ni67ARzYBDQ?si=YY82wskfxmyIS85a",
  "https://youtu.be/54m4PwXLyy4?si=d0P1_bETGff14J8e",
  "https://youtu.be/5QyConR_4tQ?si=ejre3Z0i7L9b2Hsc",
  "https://youtu.be/_UseCx9-6K0?si=VmLrzPRHlVdsn540",
  "https://youtu.be/3V2L_VxIK70?si=GEAKGE4iXFAcy3N2",
  "https://youtu.be/lJHL-2xMg94?si=_qbSpN_GK5j4dYGG",
  "https://youtu.be/gqfAOf5v3Ko?si=iI34DHAVIVpL8iu6",
];


function getYoutubeId(url) {
  return url.split("youtu.be/")[1]?.split("?")[0];
}


export default function ClientTestimonials() {

  return (

    <section className="py-80-30 bg-white">


      <div className="container-main">


        <div className="text-center !mb-12">


          <h2
            className="
            fs-52-32
            uppercase
            text-black
            "
          >

            What Our{" "}
            <span className="text-[var(--color-red-3)]">
              Clients
            </span>{" "}
            Say About Us

          </h2>


        </div>




        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-40-15
          "
        >


          {videos.map((video,index)=>(


            <div
              key={index}
              className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-[0_15px_40px_rgba(0,0,0,0.06)]
              transition-all
              duration-500
              hover:-translate-y-2
              "
            >


              <div
                className="
                overflow-hidden
                rounded-2xl
                aspect-video
                "
              >

                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(video)}`}
                  title="Client Testimonial"
                  className="
                  w-full
                  h-full
                  "
                  allowFullScreen
                  loading="lazy"
                />

              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

}