export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I’m a Computer Science B.S. Graduate from Florida State University with a strong background
        in full-stack development, software design, and Agile collaboration. I’ve led C++ and Blazor projects,
        mentored peers in best practices, and built python apps ranging from song mood boards to AI-powered quizzes.
      </p>
      <div className="about-images">
        <div className="grad-image">
          <img src="/images/Graduation.jpg" alt="Graduation" className="grad-image" />
        </div>
        <div className="head-image">
          <img src="/images/portfolio.JPG" alt="Headshot" className="head-image" />
        </div>
      </div>
    </section>
  );
}
