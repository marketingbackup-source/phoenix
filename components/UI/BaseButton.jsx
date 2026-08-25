export default function BaseButton({ title, link, toLink, type, onClick, style, children }) {
    if (link) {
        return <a href={toLink} className={`base-button ${style} group`}>
  <span>{title}</span>
  <span>{children}</span>
</a>
    }
    return <button className={`base-button ${style} group`} type={type} onClick={onClick}>
  <span>{title}</span>
  <span>{children}</span>
</button>
}