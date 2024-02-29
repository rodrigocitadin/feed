import { format, formatDistanceToNow } from "date-fns"
import Avatar from '../avatar/Avatar'
import Comment from '../comment/Comment'
import styles from './Post.module.css'
import { useState } from "react"

export default function Post({ author, content, publishedAt }) {
  const timeTitle = format(publishedAt, "do MMMM y 'at' HH:mm'h'")
  const relativeDate = formatDistanceToNow(publishedAt, { addSuffix: true })

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleCommentSubmit(event) {
    event.preventDefault()

    setComments([...comments, newComment])
    setNewComment('');
  }

  function handleNewComment(event) {
    setNewComment(event.target.value)
  }

  function deleteComment(id) {
    console.log(id)
    setComments(comments.filter((_v, i) => i !== id))
  }

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
        <time title={timeTitle} dateTime={publishedAt.toISOString()}>{relativeDate}</time>
      </header>
      <div className={styles.content}>
        {content.map((line, i) => {
          return line.type === 'p'
            ? <p key={i}>{line.content}</p>
            : <p key={i}><a href="#">{line.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewComment}
          placeholder='Write here...'
        />
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((v, i) => {
          return (
            <Comment
              key={i}
              id={i}
              content={v}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
