import baskinLogo from "../../assets/baskin.png";
const Footer = () => {
  return (
    <footer className="bg-[#003057] text-white w-full mt-20">
      <div className="relative flex flex-col items-center justify-center py-10 px-6 space-y-8 max-w-7xl mx-auto">

        {/* Mobile version of Mailing List button */}
        <div className="flex justify-center md:hidden">
          <button className="border border-white text-white hover:bg-white hover:text-[#003057] font-medium text-sm py-2 px-5 rounded-full transition-colors duration-200">
            Join Mailing List
          </button>
        </div>

        {/* Divider */}
        <hr className="border-blue-800 w-full" />

        {/* UCSC/Baskin Logo Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Baskin logo */}
          <a href="https://undergrad.engineering.ucsc.edu/student-organizations/" target="_blank" rel="noopener noreferrer">
            <img
              src={baskinLogo}
              alt="Baskin Affiliation Logo"
              className="w-52 h-auto"
            />
          </a>

          {/* UCSC + Baskin combo logo */}
          <a href="https://engineering.ucsc.edu/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://bpb-us-w2.wpmucdn.com/wordpress.ucsc.edu/dist/6/29/files/2022/07/UCSC_Baskin-Engineering-326x50-1.png"
              alt="UC Santa Cruz & Baskin Engineering Logo"
              className="w-72 h-auto"
            />
          </a>
        </div>

        {/* Text Policy Section */}
        <div className="text-center text-sm text-gray-300 max-w-4xl space-y-2">
          <p className="italic">
            This group is open to all students consistent with state and federal law, the{' '}
            <a href="https://www.ucop.edu/operating-budget/fees-and-enrollments/policies-and-resources/nondiscrimination-statement.html" className="underline" target="_blank">UC Nondiscrimination Statement</a> and the{' '}
            <a href="https://policy.ucop.edu/doc/2710540/PACAOS-Appendix-C" className="underline" target="_blank">
              Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters
            </a>.
          </p>
          <p>Baskin School of Engineering | 1156 High St | Santa Cruz, CA 95064</p>
          <p>
            <a href="https://its.ucsc.edu/terms/" target="_blank" className="underline">Privacy Policy/Terms of Use</a> | &copy;2025 Regents of the University of California. All rights reserved.
          </p>
        </div>

        {/* Desktop version of Mailing List button */}
        <div className="hidden md:block absolute right-6 bottom-6">
          <button className="border border-white text-white hover:bg-white hover:text-[#003057] font-medium text-sm py-2 px-5 rounded-full transition-colors duration-200">
            Join Mailing List
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
