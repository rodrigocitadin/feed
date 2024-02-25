import style from "./Header.module.css"
import feedLogo from "../../assets/feed-logo.png"

export default function Header() {
  return (
    <header className={style.header}>
      <img 
        src={feedLogo} 
        alt="Feed logo"
      />
    </header>
  )
}
