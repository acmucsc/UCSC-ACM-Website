import ScrollingCarousel from "../components/ScrollingCarousel"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const Welcome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ScrollingCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Welcome;

