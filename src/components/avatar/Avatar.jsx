import styles from "./Avatar.module.css"

export default function Avatar({ src, size, hasBorder = false }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      style={{ width: size, height: size}}
      src={src}
    />
  )
}
