"use client";

import { useEffect } from "react";

export default function LanguageSwitcher() {

  useEffect(() => {

    const addScript = () => {

      if (document.getElementById("google-translate-script")) {
        return;
      }


      const script = document.createElement("script");

      script.id = "google-translate-script";

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;


      document.body.appendChild(script);


      window.googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,gu,es,fr,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );

      };

    };


    addScript();


  }, []);


  return (

    <div
      id="google_translate_element"
      className="language-switcher"
    />

  );

}