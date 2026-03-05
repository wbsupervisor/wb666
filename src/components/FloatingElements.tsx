import { MessageCircle } from 'lucide-react';

export const FloatingElements = () => {
  return (
    <>
      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-sky-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </button>

      {/* iPhone Promo */}
      <div className="fixed bottom-6 left-6 z-50 w-32 md:w-48 group cursor-pointer">
        <div className="relative">
          <img src="https://illuminatelabs.space/asset/images/floating_iphone17.png" alt="iPhone Promo" className="w-full drop-shadow-2xl group-hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
        </div>
      </div>
    </>
  );
};
