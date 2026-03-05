import { motion } from 'motion/react';

const partners = [
  { id: 1, name: "Partner 1", logo: "partner_918kiss.png" },
  { id: 2, name: "Partner 2", logo: "partner_AGGaming.png" },
  { id: 3, name: "Partner 3", logo: "partner_BigGaming.png" },
  { id: 4, name: "Partner 4", logo: "partner_ekor.png" },
  { id: 5, name: "Partner 5", logo: "partner_jdb.png" },
  { id: 6, name: "Partner 6", logo: "partner_lionking.png" },
  { id: 7, name: "Partner 7", logo: "partner_Lucky365.png" },
  { id: 8, name: "Partner 8", logo: "partner_maxbet.png" },
];

const IMAGE_PREFIX = "https://illuminatelabs.space/asset/images/";

export const PartnerSlider = () => {
  return (
    <div className="w-full bg-white py-12 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gold-outline">Our Trusted Partners</h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <img 
                src={`${IMAGE_PREFIX}${partner.logo}`} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
