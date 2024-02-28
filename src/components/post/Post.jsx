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
        <time title={timeTitle} datetime={publishedAt.toISOString()}>{relativeDate}</time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          return line.type === 'p'
            ? <p>{line.content}</p>
            : <p><a href="#">{line.content}</a></p>
        })}
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
