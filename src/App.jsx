import Header from "./components/header/Header"
import styles from './App.module.css'
import './global.css'
import SideBar from "./components/sidebar/SideBar"
import Post from "./components/post/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rodrigocitadin.png",
      name: "Rodrigo Citadin",
      role: "Fullstack Engineer"
    },
    content: [
      { type: "p", content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
      { type: "p", content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
      { type: "a", content: "#wow" },
    ],
    publishedAt: new Date('2024-02-27 21:31:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: "Felipe Deschamps",
      role: "Software Engineer"
    },
    content: [
      { type: "p", content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
      { type: "p", content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
      { type: "p", content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
    ],
    publishedAt: new Date('2024-02-27 21:31:00')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
            <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
