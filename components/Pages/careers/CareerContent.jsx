export default function CareerContent({ career }) {
  return (
    <section className="bg-white py-100-40">
      <div className="container-main">
        <div className="">
          <div
            className="
              career-content
              text-gray-600
              leading-[1.8]
            "
            dangerouslySetInnerHTML={{
              __html: career.content,
            }}
          />

          {career.jobStatus !== "open" && (
            <div
              className="
                mt-10
                rounded-[20px]
                border
                border-black/10
                bg-[#f7f7f7]
                p-6
                sm:p-8
              "
            >
              <p className="text-[var(--color-red-1)] font-medium !mb-2">
                Position Closed
              </p>

              <p className="text-gray-500 !mb-0">
                This position is currently not accepting applications.
                Please explore our other available career opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}