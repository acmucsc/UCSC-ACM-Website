import baskinLogo from "../../assets/baskin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Mobile version of Mailing List button */}
        <div className="footer-mailing-mobile">
          <button className="footer-button">
            Join Mailing List
          </button>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* UCSC/Baskin Logo Section */}
        <div className="footer-logos">
          <a
            href="https://undergrad.engineering.ucsc.edu/student-organizations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={baskinLogo}
              alt="Baskin Affiliation Logo"
              className="footer-logo-baskin"
            />
          </a>

          <a
            href="https://engineering.ucsc.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://bpb-us-w2.wpmucdn.com/wordpress.ucsc.edu/dist/6/29/files/2022/07/UCSC_Baskin-Engineering-326x50-1.png"
              alt="UC Santa Cruz & Baskin Engineering Logo"
              className="footer-logo-ucsc"
            />
          </a>
        </div>

        {/* Text Policy Section */}
        <div className="footer-policy">
          <p>
            <em>
              This group is open to all students consistent with state and
              federal law, the{" "}
              <a
                href="https://www.ucop.edu/operating-budget/fees-and-enrollments/policies-and-resources/nondiscrimination-statement.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                UC Nondiscrimination Statement
              </a>{" "}
              and the{" "}
              <a
                href="https://policy.ucop.edu/doc/2710540/PACAOS-Appendix-C"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nondiscrimination Policy Statement for University of California
                Publications Regarding Student-Related Matters
              </a>.
            </em>
          </p>
          <p>Baskin School of Engineering | 1156 High St | Santa Cruz, CA 95064</p>
          <p>
            <a
              href="https://its.ucsc.edu/terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy/Terms of Use
            </a>{" "}
            | &copy;2025 Regents of the University of California. All rights
            reserved.
          </p>
        </div>

        {/* Desktop version of Mailing List button */}
        <div className="footer-mailing-desktop">
          <button className="footer-button">
            Join Mailing List
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
