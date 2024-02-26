import Header from "./components/header/Header"
import styles from './App.module.css'
import './global.css'
import SideBar from "./components/sidebar/SideBar"
import Post from "./components/post/Post"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Rodrigo Citadin"
            content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
          <Post
            author="Miguelito Donatelo"
            content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
        </main>
      </div>
    </>
  )
}

export default App
