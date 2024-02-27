import { ThumbsUp, TrashSimple } from "phosphor-react";

export default function Comment() {
  return (
    <div>
      <img src="https://github.com/rodrigocitadin.png" />
      <div>
        <div>
          <header>
            <div>
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
