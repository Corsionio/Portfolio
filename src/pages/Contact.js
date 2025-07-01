import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <Header />
    <section className="contact-page">
      <h2>Contact Me</h2>
      <p>Email: corsomontuori@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/corsomontuori" target="_blank" rel="noopener noreferrer">linkedin.com/in/corsomontuori</a></p>
      <p>GitHub: <a href="https://github.com/Corsionio" target="_blank" rel="noopener noreferrer">github.com/Corsionio</a></p>
    </section>
    <Footer />
   </>
  );
}
