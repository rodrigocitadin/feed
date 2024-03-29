import { ThumbsUp, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "../avatar/Avatar";
import { useState } from "react";

export default function Comment({ id, content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  return (
    <div className={styles.comment}>
      <Avatar size="3rem" src="https://github.com/rodrigocitadin.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Citadin</strong>
              <time dateTime="">1h ago</time>
            </div>
            <button title="Delete comment">
              <TrashSimple size={20} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
