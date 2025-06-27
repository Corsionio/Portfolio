import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
