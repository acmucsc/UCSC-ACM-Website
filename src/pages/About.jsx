import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-6 md:px-20 py-16 max-w-7xl mx-auto space-y-28 relative" style={{ fontSize: '1.6rem' }}>
        {/* SECTION 1 */}
        <section className="w-full py-24 px-6 md:px-28 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
          {/* Left: Text content */}
          <div className="text-left space-y-6 md:w-1/2">
            <h1 className="text-6xl font-bold">What is ACM @ UCSC?</h1>
            <p className="text-2xl italic">
              We are the Association for Computing Machinery at UCSC!
            </p>
            <p className="text-lg leading-relaxed">
              We are a welcoming community for anyone passionate about computing.
              Whether you're a beginner or an expert, from any major or background,
              you're welcome here!
            </p>
          </div>

          {/* Right: Diamond image */}
          <div className="hidden md:flex md:w-1/2 justify-end">
            <div className="w-44 h-44 bg-gray-300 rotate-45 rounded-xl shadow-md flex items-center justify-center font-semibold text-gray-700">
              <div className="-rotate-45 text-center">Group Picture of Club</div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Get Involved */}
        <section className="space-y-14">
          <h2 className="text-3xl font-bold text-center">I'm interested! How do I get involved?</h2>

          {/* Social Media Row */}
          <div className="flex flex-col space-y-16">
            <div className="flex">
              {/* Left diamond placeholder aligned with content */}
              <div className="flex flex-col items-center mr-8">
                <div className="w-24 h-24 bg-gray-200 rounded-xl rotate-45"></div>
              </div>

              {/* Text content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Connect with us on Social Media!</h3>
                <p className="text-md">Keep in touch with us through Discord and Instagram!</p>
                
                {/* Social icons */}
                <div className="flex space-x-4 text-3xl mt-2">
                  <i className="fab fa-instagram text-blue-500"></i>
                  <i className="fab fa-discord text-blue-500"></i>
                  <i className="fab fa-linkedin text-blue-500"></i>
                </div>
              </div>
            </div>

            {/* Communities */}
            <div className="flex">
              {/* Left diamond placeholder aligned with content */}
              <div className="flex flex-col items-center mr-8">
                <div className="w-24 h-24 bg-gray-200 rounded-xl rotate-45"></div>
              </div>

              {/* Text content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Join our other communities!</h3>
                
                {/* Community boxes - two columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mt-6">
                  {/* Community 1: HACKS */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-purple-500 text-white rounded-xl rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 font-semibold text-xs">hack</span>
                    </div>
                    <span className="text-lg">acm.HACKS</span>
                  </div>
                  
                  {/* Community 2: LEARN */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-400 text-white rounded-xl rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 font-semibold text-xs">learn</span>
                    </div>
                    <span className="text-lg">acm.LEARN</span>
                  </div>
                  
                  {/* Community 3: ALUMNI */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-400 text-white rounded-xl rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 font-semibold text-xs">alumni</span>
                    </div>
                    <span className="text-lg">acm.ALUMNI</span>
                  </div>
                  
                  {/* Community 4: DEV */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-400 text-white rounded-xl rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 font-semibold text-xs">dev</span>
                    </div>
                    <span className="text-lg">acm.DEV</span>
                  </div>
                  
                  {/* Community 5: RESEARCH */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-rose-400 text-white rounded-xl rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 font-semibold text-xs">rsch</span>
                    </div>
                    <span className="text-lg">acm.RESEARCH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;