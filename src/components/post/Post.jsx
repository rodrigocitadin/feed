import { format, formatDistanceToNow } from "date-fns"
import Avatar from '../avatar/Avatar'
import Comment from '../comment/Comment'
import styles from './Post.module.css'

export default function Post({ author, content, publishedAt }) {
  const timeTitle = format(publishedAt, "do MMMM y 'at' HH:mm'h'")
  const relativeDate = formatDistanceToNow(publishedAt, { addSuffix: true })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            size="5rem"
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={timeTitle} datetime="">{relativeDate}</time>
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
