import ScrollingCarousel from "../components/ScrollingCarousel/ScrollingCarousel"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Bio from "../components/Bio/Bio"

const Welcome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Bio />
        <ScrollingCarousel />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};



export default Welcome;

