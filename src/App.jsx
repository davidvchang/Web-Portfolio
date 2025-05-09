import ContactMe from "./sections/ContactMe"
import Experience from "./sections/Experience"
import Home from "./sections/Home"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"


function App() {

  return (
    <main className="bg-background-dark min-h-screen text-white">
      <NavBar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Experience/>
      <ContactMe/>
    </main>
  )
}

export default App
