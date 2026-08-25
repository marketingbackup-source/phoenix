"use client";


export default function VisaContent({
  content,
}) {

  return (

    <article
      className="
      visa-content
      text-gray-600
      leading-[1.8]
      "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />

  );

}