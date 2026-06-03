import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="bg-[#02111f] text-white min-h-screen">

      

      <main className="lg:ml-[360px]">
        <Navbar />
<Sidebar />
  <Hero />
 <Stats />
<About />
<Experience />
<Services />
<Projects />
<Testimonials />
<Contact />
<Footer />

      </main>

    </div>
  );
}