import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#030303] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: WhatsApp CTA */}
          <div className="text-pink-mist/50 text-sm text-center md:text-left">
            Need a high-volume custom plan or agency-level enterprise solution?{" "}
            <br className="hidden md:block" />
            <Link
              href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I'm%20interested%20in%20a%20custom%20high-volume%20Pinterest%20plan."
              target="_blank"
              className="text-ruby-red hover:text-pink-mist transition-colors underline decoration-white/20 underline-offset-4 mt-2 inline-block font-semibold"
            >
              {`Let's Talk on WhatsApp`}
            </Link>
          </div>

          {/* Center/Right Side: Social Links */}
          <div className="flex items-center gap-6 text-pink-mist/40">
            <Link
              href="https://www.linkedin.com/in/sadafshahab07/"
              target="_blank"
              className="hover:text-ruby-red transition-all hover:scale-110"
            >
              <BsLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/sadafshahab97"
              target="_blank"
              className="hover:text-ruby-red transition-all hover:scale-110"
            >
              <BsFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/sadafshahab97"
              target="_blank"
              className="hover:text-ruby-red transition-all hover:scale-110"
            >
              <BsInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Line: Copyright & Branding */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-pink-mist/30 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex items-center gap-4">
            <span>© 2026 Sadaf Shahab</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>Pinterest Studio V-2</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/20 hover:text-ruby-red transition-colors cursor-default">
              #SadafDeveloper
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
