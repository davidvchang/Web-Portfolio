import Home from "./sections/Home"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"


function App() {

  return (
    <main className="bg-background-dark min-h-screen text-white">
      <NavBar/>
      <Home/>
      <Projects/>
    </main>
  )
}

export default App
