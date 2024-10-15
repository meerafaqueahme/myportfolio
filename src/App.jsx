


import Navbar from './component/navbar/Navbar'
import HeroSection from './component/heroSection/HeroSection'
import About from './component/about/About'
import ProjectsPage from './component/project/Project'
import Contect from './component/contact/Contect'
import Footer from './component/footer/Footer'
import Chatboot from './component/chatboot/Chatboot'
 function App  () {
  return (
    

  
    <div >
      <Navbar/>
          <HeroSection />
          <About/>
          <ProjectsPage />
          <Contect />
          <Footer/>
          <Chatboot/>
        
    </div>
  )
}

export default App