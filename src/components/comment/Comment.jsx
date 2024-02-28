import { ThumbsUp, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "../avatar/Avatar";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar size="3rem" src="https://github.com/rodrigocitadin.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Citadin</strong>
              <time datetime="">1h ago</time>
            </div>
            <button title="Delete comment">
              <TrashSimple size={20} />
            </button>
          </header>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Like <span>22</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
