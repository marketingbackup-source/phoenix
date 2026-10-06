"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";


export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const [
    newsletterMessage,
    setNewsletterMessage,
  ] = useState("");

  const [
    newsletterLoading,
    setNewsletterLoading,
  ] = useState(false);

  const [
    recaptchaToken,
    setRecaptchaToken,
  ] = useState("");

  const [
    recaptchaError,
    setRecaptchaError,
  ] = useState("");

  const recaptchaRef = useRef(null);


  async function submitNewsletter(e) {
    e.preventDefault();

    setNewsletterMessage("");
    setRecaptchaError("");


    if (!email.trim()) {
      setNewsletterMessage(
        "Please enter your email"
      );

      return;
    }


    if (!recaptchaToken) {
      setRecaptchaError(
        "Please confirm that you are not a robot."
      );

      return;
    }


    try {
      setNewsletterLoading(true);


      const response = await fetch(
        "/api/newsletter",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email: email.trim(),
            recaptchaToken,
          }),
        }
      );


      const result =
        await response.json();


      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Something went wrong"
        );
      }


      setNewsletterMessage(
        "Subscribed successfully"
      );

      setEmail("");

      setRecaptchaToken("");

      recaptchaRef.current?.reset();

    } catch (error) {
      setNewsletterMessage(
        error.message ||
          "Something went wrong. Please try again."
      );

      /*
       * reCAPTCHA tokens should not
       * be reused after submission.
       */
      setRecaptchaToken("");

      recaptchaRef.current?.reset();

    } finally {
      setNewsletterLoading(false);
    }
  }


  return (
    <div className="w-full">

      <p className="footer-nav-heading !mb-3">
        Stay Updated
      </p>


      <form
        onSubmit={submitNewsletter}
        className="
          flex
          overflow-hidden
          rounded-lg
          border
          border-white/10
          bg-black/20
        "
      >

        <input
          type="email"
          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          placeholder="Enter your email"

          aria-label="Email address"

          className="
            w-full
            bg-transparent
            px-3
            py-3
            text-sm
            !text-white/80
            outline-none
            placeholder:text-white/40
          "
        />


        <button
          type="submit"

          disabled={newsletterLoading}

          aria-label="Subscribe to newsletter"

          className="
            flex
            items-center
            justify-center
            px-4
            bg-[var(--color-red-1)]
            !text-white
            disabled:opacity-50
          "
        >

          <ArrowRight size={17} />

        </button>

      </form>


      {/* Google reCAPTCHA */}
      <div className="mt-3">

        <ReCAPTCHA
          ref={recaptchaRef}

          sitekey={
            process.env
              .NEXT_PUBLIC_RECAPTCHA_SITE_KEY
          }

          theme="dark"

          onChange={(token) => {
            setRecaptchaToken(
              token || ""
            );

            if (token) {
              setRecaptchaError("");
            }
          }}

          onExpired={() => {
            setRecaptchaToken("");
          }}

          onErrored={() => {
            setRecaptchaToken("");

            setRecaptchaError(
              "reCAPTCHA could not be loaded."
            );
          }}
        />


        {recaptchaError && (
          <p
            className="
              mt-2
              !mb-0
              text-xs
              text-red-400
            "
          >
            {recaptchaError}
          </p>
        )}

      </div>


      {newsletterMessage && (
        <p className="mt-2 !mb-0 text-xs text-white/90">
          {newsletterMessage}
        </p>
      )}

    </div>
  );
}