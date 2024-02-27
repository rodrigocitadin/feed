import styles from './Post.module.css'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rodrigocitadin.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Citadin</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time datetime="">Published 1h ago</time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <p><a href="#">see more...</a></p>
        <p><a href="#">#sla #idk #nsei</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder='Write here...' />
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>
    </article>
  )
}
