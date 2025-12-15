import { useEffect } from 'react';
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Bio from "../../components/Bio/Bio"
import "./Welcome.css";

const Welcome = () => {
  useEffect(() => {
    document.title = "home | acm at ucsc";
  }, []);
  return (
    <div className="welcome-page">
      <Navbar />
      <main className="welcome-main navbar-scope">
        <Bio />
        <Banner speed={400000} />
        {/* <ScrollingCarousel /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Welcome;