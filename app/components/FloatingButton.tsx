import { MessageCircle } from "lucide-react";
import Link from "next/link";


const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I'd%20like%20to%20discuss%20a%20custom%20Pinterest%20strategy."
        target="_blank"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-black/80 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Chat with Sadaf
        </span>
      </Link>
    </div>
  );
};

export default FloatingButton;
