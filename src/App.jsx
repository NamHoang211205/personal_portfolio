
import {Navbar} from '@/layout/Navbar'
import {Hero} from '@/sections/Hero'
import {About} from '@/sections/About'
import {Project} from '@/sections/Project'
import {Contact} from '@/sections/Contact'
import {Testimonials} from '@/sections/Testimonials'
import {Experience} from '@/sections/Experience'
function App() {

  return (
   <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      {/* <Hero />
      <About />
      <Project />
      <Contact />
      <Testimonials />
      <Experience /> */}
    </main>
   </div>
  )
}

export default App
