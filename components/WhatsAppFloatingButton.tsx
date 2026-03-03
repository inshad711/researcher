import React from "react";

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 fill-current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.171 1.597 5.983L0 24l6.163-1.617a11.82 11.82 0 005.883 1.576h.004c6.604 0 11.967-5.364 11.97-11.97a11.81 11.81 0 00-3.604-8.472" />
  </svg>
);

const WhatsAppFloatingButton = () => {
  const phoneNumber = "1234567890";
  const message = "Hi! I'd like to ask about...";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group fixed bottom-8 right-8 z-[9999] flex items-center gap-3">
      <div className="pointer-events-none translate-x-4 rounded-lg border border-gray-100 bg-white px-4 py-2 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <p className="text-gray-700 font-semibold text-sm whitespace-nowrap">
          Chat with us!
        </p>
      </div>

      <div className="relative group">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon />
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute -top-full -left-full w-[200%] h-[200%] bg-gradient-to-br from-white/20 to-transparent rotate-45 group-hover:animate-shine"></div>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloatingButton;
