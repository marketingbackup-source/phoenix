export default function BaseBadge({ title }) {
    return (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-red-1)]">
            {title}
        </span>
    );
}