import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const boardMembers = [
  { title: "President", name: "Placeholder" },
  { title: "Vice President", name: "Placeholder" },
  { title: "Instruction Lead", name: "Placeholder" },
  { title: "Community Lead", name: "Placeholder" },
  { title: "Web-Dev Lead", name: "Placeholder" },
  { title: "Events Lead", name: "Placeholder" },
];

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">
        {/* SECTION 1 */}
        <section className="about-section about-intro">
          <div className="about-intro-text">
            <h1>What is ACM @ UCSC?</h1>
            <p className="intro-subtitle">
              We are the Association for Computing Machinery at UCSC!
            </p>
            <p>
              We are a welcoming community for anyone passionate about computing.
              Whether you're a beginner or an expert, from any major or background,
              you're welcome here!
            </p>
          </div>

          <div className="about-intro-image">
            <div className="about-diamond">
              <div className="about-diamond-text">Group Picture of Club</div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="about-section about-involved">
          <h2>I'm interested! How do I get involved?</h2>

          <div className="about-involved-content">
            {/* Social Media */}
            <div className="about-row">
              <div className="about-diamond-small"></div>
              <div className="about-text-block">
                <h3>Connect with us on Social Media!</h3>
                <p>Keep in touch with us through Discord and Instagram!</p>
                <div className="about-social-icons">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-discord"></i>
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>

            {/* Communities */}
            <div className="about-row">
              <div className="about-diamond-small"></div>
              <div className="about-text-block">
                <h3>Join our other communities!</h3>
                <div className="about-community-grid">
                  <div className="about-community">
                    <div className="community-icon purple">
                      <span>hack</span>
                    </div>
                    <span>acm.HACKS</span>
                  </div>

                  <div className="about-community">
                    <div className="community-icon yellow">
                      <span>learn</span>
                    </div>
                    <span>acm.LEARN</span>
                  </div>

                  <div className="about-community">
                    <div className="community-icon green">
                      <span>alumni</span>
                    </div>
                    <span>acm.ALUMNI</span>
                  </div>

                  <div className="about-community">
                    <div className="community-icon orange">
                      <span>dev</span>
                    </div>
                    <span>acm.DEV</span>
                  </div>

                  <div className="about-community">
                    <div className="community-icon rose">
                      <span>rsch</span>
                    </div>
                    <span>acm.RESEARCH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="about-section about-board">
          <h2>Meet the Board</h2>
          <div className="about-board-grid">
            {boardMembers.map((department, idx) => (
              <div key={idx} className="about-board-card">
                <h3>{department.title}</h3>
                <img
                  src="src/assets/acm-logo.png"
                  alt="ACM Logo"
                  className="about-board-logo"
                />
                <p>{department.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
