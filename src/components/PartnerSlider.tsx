import { motion } from 'motion/react';

const partners = [
  { id: 1, name: "918Kiss", logo: "partner_918kiss.png" },
  { id: 2, name: "AG Gaming", logo: "partner_AGGaming.png" },
  { id: 3, name: "Big Gaming", logo: "partner_BigGaming.png" },
  { id: 4, name: "Ekor", logo: "partner_ekor.png" },
  { id: 5, name: "JDB", logo: "partner_jdb.png" },
  { id: 6, name: "Lion King", logo: "partner_lionking.png" },
  { id: 7, name: "Lucky 365", logo: "partner_Lucky365.png" },
  { id: 8, name: "Maxbet", logo: "partner_maxbet.png" },
  { id: 9, name: "Playtech", logo: "partner_playtech.png" },
  { id: 10, name: "Pragmatic Play", logo: "partner_pragmatic.png" },
  { id: 11, name: "SBOBET", logo: "partner_sbobet.png" },
];

const IMAGE_PREFIX = "https://illuminatelabs.space/asset/images/";

export const PartnerSlider = () => {
  return (
    <div className="w-full bg-white py-12 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-blue-gold-outline mb-2">Our Trusted Partners</h2>
        <p className="text-gray-500 font-medium">Collaborating with world-class providers</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex gap-12 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex items-center justify-center w-32 h-16 md:w-48 md:h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-sky-200"
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
