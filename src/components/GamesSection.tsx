export const GamesSection = () => {
  const providers = [
    { name: "EKOR", category: "LOTTERY", image: "https://illuminatelabs.space/asset/images/hotgame_ekor.webp", type: "lottery" },
    { name: "LUCKY 365", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_lucky365.webp", type: "slots" },
    { name: "PRAGMATIC PLAY", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_pragmaticplay.webp", type: "slots" },
    { name: "MICROSLOT", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_microslot.webp", type: "slots" },
    { name: "MONKEY KING", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_monkeyking.webp", type: "slots" },
    { name: "EVOLUTION", category: "LIVE", image: "https://illuminatelabs.space/asset/images/hotgame_evolution.webp", type: "live" },
    { name: "JILI", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_jili.webp", type: "slots" },
    { name: "JDB", category: "FISHING & SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_jdb.webp", type: "slots" },
    { name: "CQ9", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_cq9.webp", type: "slots" },
    { name: "FA CHAI", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_fachai.webp", type: "slots" },
    { name: "NEXTSPIN", category: "SLOTS", image: "https://illuminatelabs.space/asset/images/hotgame_nextspin.webp", type: "slots" },
    { name: "SEXY", category: "LIVE", image: "https://illuminatelabs.space/asset/images/hotgame_sexy.webp", type: "live" },
  ];

  // Duplicate for seamless loop
  const displayProviders = [...providers, ...providers];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'lottery': return 'from-orange-500 to-orange-600';
      case 'live': return 'from-red-500 to-red-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <div className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl font-black text-center uppercase tracking-tight text-gold-outline">Winbox Games</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {displayProviders.map((p, i) => (
            <div key={i} className="mx-3 w-48 md:w-56 flex-shrink-0 group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105">
                {/* Background Image */}
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hot Badge */}
                <div className="absolute top-2 right-2 z-20">
                  <div className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    HOT <span className="animate-pulse">🔥</span>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${getTypeStyles(p.type)} text-center text-white`}>
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tighter truncate">
                    {p.name}
                  </h3>
                  <p className="text-[8px] md:text-[10px] font-bold opacity-90 tracking-widest">
                    - {p.category} -
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
