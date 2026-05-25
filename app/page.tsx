import Navbar from "@/components/navbar";
import Container from "@/components/container";
import Interest from "@/components/interest";
import Hobies from "@/components/hobies";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />

      {/* Hero Header Section */}
      <section className="heroSection">
        <div className="heroContent">
          <span className="badge">Electronics &amp; And Communication</span>
          <h1>Hi, I'm Manushree Shekhawat.</h1>
          <h2>Building intelligent systems & scalable architectures.</h2>
          <p>
            I am a Electronics and Communcation engineering student.
           I focus on designing electronic circuits, building embedded systems, and exploring reliable hardware and communication technologies.
          </p>
          <a href="#contact" className="ctaButton">Let’s connect</a>
        </div>
      </section>
          
        
      

      {/* Reusable Container Sections */}
      <Container id="about" title="Interests">
        <Interest />
      </Container>

      <Container id="hobbies" title="Personal Pursuits">
        <Hobies />
      </Container>

      {/* Contact Form Section */}
      <Container id="contact" title="Get In Touch">
        <div className="contactWrapper">
          <p className="contactSubtitle">
            Always excited to connect with people who share an interest in electronics, innovation, and emerging technologies.
          </p>
          <form className="form">
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>
      </Container>

      <Footer />
    </div>
  );
}