export default function EligibilityShell({
  children,
  stepLabel = "Result",
  progress = 100,
}) {
  const safeProgress = Math.max(0, Math.min(progress, 100));

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-center bg-no-repeat bg-cover bg-[url(https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/eligibilty-bg-scaled.jpg)]"
      style={{ fontFamily: "'Lufga', 'General Sans', sans-serif" }}
    >
      <div className="w-full max-w-[520px] overflow-hidden rounded-[18px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.11)]">
        <div className="bg-[#282828] px-[26px] pt-[18px] pb-[14px]">
          <div className="flex items-center gap-[10px]">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#e2080d]" />

            <span className="flex-1 text-[11px] font-medium uppercase tracking-[0.9px] text-white/45">
              Phoenix Business Advisory
            </span>

            <span className="whitespace-nowrap text-[11px] text-white/35">
              {stepLabel}
            </span>
          </div>

          <div className="mt-3 h-[2px] overflow-hidden rounded-[2px] bg-white/10">
            <div
              className="h-full rounded-[2px] bg-[#e2080d] transition-[width] duration-500 ease-out"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>

        <div className="px-[15px] py-[15px] sm:px-8 sm:py-[30px]">
          {children}
        </div>
      </div>

      <p className="!mt-[14px] !mb-0 text-center !text-[11px] !text-[#aaa]">
        © 2026 <strong className="font-semibold !text-[#999]">Phoenix Business Advisory</strong> - All Rights Reserved
      </p>
    </section>
  );
}
