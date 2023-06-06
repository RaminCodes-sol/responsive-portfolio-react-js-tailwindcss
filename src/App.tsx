import Footer from "./components/Footer"
import HeaderSection from "./components/HeaderSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"



const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />
      <HeaderSection />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
