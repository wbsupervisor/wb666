import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showIphone, setShowIphone] = useState(true);
  const [showGoldBar, setShowGoldBar] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-sky-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </button>

      {/* Floating Promos Container */}
      <div className="fixed bottom-12 md:bottom-10 left-6 z-50 flex flex-col-reverse gap-4 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {/* iPhone Promo */}
          {showIphone && (
            <motion.div 
              key="iphone"
              layout
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              drag={isMobile}
              dragMomentum={false}
              whileDrag={{ scale: 1.1 }}
              className="w-28 md:w-48 group cursor-pointer touch-none pointer-events-auto relative"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setShowIphone(false); }}
                className="absolute -top-2 -right-2 z-10 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="relative">
                <img src="https://illuminatelabs.space/asset/images/winbox_freeiphonepromax.png" alt="iPhone Promo" className="w-full drop-shadow-2xl group-hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          )}

          {/* Gold Bar Promo */}
          {showGoldBar && (
            <motion.div 
              key="goldbar"
              layout
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              drag={isMobile}
              dragMomentum={false}
              whileDrag={{ scale: 1.1 }}
              className="w-28 md:w-48 group cursor-pointer touch-none pointer-events-auto relative"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setShowGoldBar(false); }}
                className="absolute -top-2 -right-2 z-10 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="relative">
                <img src="https://illuminatelabs.space/asset/images/winbox_floatingfreegoldbar.png" alt="Free Gold Bar" className="w-full drop-shadow-2xl group-hover:-translate-y-2 transition-transform" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
