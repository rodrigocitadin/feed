import style from "./Header.module.css"
import feedLogo from "../../assets/feed-logo.png"

export default function Header() {
  return (
    <header className={style.header}>
      <img 
        width={64}
        height={64} 
        src={feedLogo} 
        alt="Feed logo"
      />
    </header>
  )
}
