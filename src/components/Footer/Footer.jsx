const Footer = () => {
    return (
      <footer className="bg-gray-900 py-6 px-4 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <div className="w-1 h-32 bg-blue-500 mr-6"></div>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a
                href="/"
                className="text-white hover:text-blue-400 text-lg no-underline"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-white hover:text-blue-400 text-lg no-underline"
              >
                Events
              </a>
              <a
                href="/about"
                className="text-white hover:text-blue-400 text-lg no-underline"
              >
                About
              </a>
              <a
                href="/team"
                className="text-white hover:text-blue-400 text-lg no-underline"
              >
                Team
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center md:justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg">
              Join Mailing List
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;