import Link from "next/link";


const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#030303] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-pink-mist/50 text-sm">
          Need a high-volume custom plan or agency-level enterprise solution?{" "}
          <br className="hidden md:block" />
          <Link
            href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I'm%20interested%20in%20a%20custom%20high-volume%20Pinterest%20plan."
            className="text-ruby-red hover:text-pink-mist transition-colors underline decoration-white/20 underline-offset-4 mt-2 inline-block"
          >
            {`Let's Talk on WhatsApp`}
          </Link>
        </div>

        <div className="text-pink-mist/40 text-xs flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span>© 2026 Sadaf Shahab</span>
          <span className="hidden sm:inline">•</span>
          <span>Pinterest Studio V-2</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-white/30 tracking-widest hover:text-white/50 transition-colors cursor-pointer">
            #SadafDeveloper
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
