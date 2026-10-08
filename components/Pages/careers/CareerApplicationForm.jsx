"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight } from "lucide-react";
import { BriefcaseBusiness, FileText, Upload, X } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

const experienceOptions = [
  "Fresher",
  "Less than 1 Year",
  "1-3 Years",
  "3-5 Years",
  "5-8 Years",
  "8+ Years",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function CareerApplicationForm({ career, careers = [] }) {
  const recaptchaRef = useRef(null);

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    jobTitle: career?.title || "",
    experience: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  if (career?.jobStatus !== "open") {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleResumeChange(event) {
    const file = event.target.files?.[0];

    setFileError("");

    if (!file) {
      return;
    }

    const allowedExtensions = [".pdf", ".doc", ".docx"];

    const fileExtension = file.name
      .toLowerCase()
      .slice(file.name.lastIndexOf("."));

    const hasValidExtension =
      allowedExtensions.includes(fileExtension);

    const hasValidMimeType =
      !file.type || allowedFileTypes.includes(file.type);

    if (!hasValidExtension || !hasValidMimeType) {
      setResume(null);
      setFileError("Please upload a PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setResume(null);
      setFileError("Resume must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    setResume(file);
  }

  function removeResume() {
    setResume(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setFileError("");
    setRecaptchaError("");
    setSubmitStatus({
      type: "",
      message: "",
    });

    if (!resume) {
      setFileError("Please upload your resume.");
      return;
    }

    if (!recaptchaToken) {
      setRecaptchaError("Please confirm that you are not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("city", formData.city);
      payload.append("jobTitle", formData.jobTitle);
      payload.append("experience", formData.experience);
      payload.append("message", formData.message);
      payload.append("resume", resume);
      payload.append("recaptchaToken", recaptchaToken);

      const response = await fetch(
        "https://phoenix-career-application.throbbing-tree-32eb.workers.dev/",
        {
          method: "POST",
          body: payload,
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your application.");
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message || "Your application has been submitted successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        jobTitle: career?.title || "",
        experience: "",
        message: "",
      });

      setResume(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setRecaptchaToken("");

      recaptchaRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });

      // CAPTCHA tokens are single-use / can expire.
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="apply" className="bg-[#f7f7f7] py-100-40">
      <div className="container-main">
        <div className="">
          {/* Heading */}
          <div className=" mb-10 sm:mb-12">
            <p
              className="
                uppercase
                tracking-[3px]
                text-[var(--color-red-1)]
                !mb-4
              "
            >
              Apply for this position
            </p>

            <h2 className="fs-52-32 !mb-4">Join Our Team</h2>

            <p className="text-gray-500 !mb-0 leading-[1.7]">
              Submit your details and resume to apply for the{" "}
              <strong className="text-black font-medium">{career.title}</strong>{" "}
              position.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-white
              border
              border-black/10
              rounded-[24px]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="career-form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address{" "}
                  <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="career-form-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number{" "}
                  <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="career-form-input"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-2"
                >
                  Current City{" "}
                  <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your current city"
                  required
                  className="career-form-input"
                />
              </div>

              {/* Job Title */}
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium mb-2"
                >
                  Job Title <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="career-form-input appearance-none pr-12"
                  >
                    <option value="">Select position</option>

                    {careers.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>

                  <BriefcaseBusiness
                    size={18}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      pointer-events-none
                    "
                  />
                </div>
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Experience{" "}
                  <span className="text-[var(--color-red-1)]">*</span>
                </label>

                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="career-form-input appearance-none"
                >
                  <option value="">Select experience</option>

                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Resume */}
              <div className="md:col-span-2">
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium mb-2"
                >
                  Resume / CV{" "}
                  <span className="text-[var(--color-red-1)]">*</span>
                </label>

                {!resume ? (
                  <label
                    htmlFor="resume"
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-h-[160px]
                      border
                      border-dashed
                      border-black/20
                      rounded-[16px]
                      bg-[#fafafa]
                      cursor-pointer
                      transition-colors
                      hover:border-[var(--color-red-1)]/60
                    "
                  >
                    <Upload
                      size={26}
                      className="text-[var(--color-red-1)] mb-3"
                    />

                    <span className="text-sm font-medium mb-1">
                      Upload your resume
                    </span>

                    <span className="text-xs text-gray-400">
                      PDF, DOC or DOCX · Maximum 5 MB
                    </span>
                  </label>
                ) : (
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-5
                      min-h-[90px]
                      border
                      border-black/10
                      rounded-[16px]
                      bg-[#fafafa]
                      px-5
                      py-4
                    "
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="
                          shrink-0
                          w-11
                          h-11
                          rounded-xl
                          bg-[var(--color-red-1)]/10
                          text-[var(--color-red-1)]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <FileText size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate !mb-1">
                          {resume.name}
                        </p>

                        <p className="text-xs text-gray-400 !mb-0">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={removeResume}
                      aria-label="Remove resume"
                      className="
                        shrink-0
                        w-9
                        h-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                        border-black/10
                        hover:border-[var(--color-red-1)]
                        hover:text-[var(--color-red-1)]
                        transition-colors
                      "
                    >
                      <X size={17} />
                    </button>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />

                {fileError && (
                  <p className="text-sm text-[var(--color-red-1)] !mt-2 !mb-0">
                    {fileError}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us anything you would like us to know..."
                  className="career-form-input resize-none"
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="mt-8">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setRecaptchaToken(token || "");
                  setRecaptchaError("");
                }}
                onExpired={() => {
                  setRecaptchaToken("");
                }}
                onErrored={() => {
                  setRecaptchaToken("");
                  setRecaptchaError(
                    "CAPTCHA verification failed. Please try again.",
                  );
                }}
              />

              {recaptchaError && (
                <p className="text-sm text-[var(--color-red-1)] !mt-2 !mb-0">
                  {recaptchaError}
                </p>
              )}
            </div>

            {/* Submission Status */}
            {submitStatus.message && (
              <div
                className={`
      mt-6
      rounded-[12px]
      border
      px-4
      py-3
      text-sm
      ${submitStatus.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                  }
    `}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit */}
            <div className="mt-8">
              <BaseButton
                title={isSubmitting ? "Submitting..." : "Submit Application"}
                type="submit"
                style="primary w-fit"
              >
                <ArrowRight size={18} />
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
