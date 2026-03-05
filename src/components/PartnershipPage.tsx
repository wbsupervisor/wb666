import { motion } from 'motion/react';
import { ShieldCheck, Gift, Zap, Server, Flame, ExternalLink, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Footer } from './Footer';

export const PartnershipPage = () => {
  const partners = [
    {
      name: "Ez8",
      joined: "Official Partner since 2023",
      logoUrl: "https://illuminatelabs.space/asset/images/EZ8_logo.avif",
      logoColor: "text-white",
      bonus: "365%",
      maxAmount: "RM4,560",
      highlights: ["Instant Deposit", "24/7 Support", "Daily Rebate"],
      bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      buttonText: "text-teal-600",
      isHot: true,
      logoBg: "bg-white/20"
    },
    {
      name: "HengOngBet",
      joined: "Official Partner since 2024",
      logoUrl: "https://illuminatelabs.space/asset/images/HengOngBet_logo.avif",
      logoColor: "text-white",
      bonus: "222%",
      maxAmount: "3%",
      highlights: ["Fast Payout", "VIP Rewards", "Secure"],
      bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
      buttonText: "text-orange-600",
      isHot: false,
      logoBg: "bg-white/20"
    }
  ];

  const features = [
    {
      title: "Trusted Partners",
      desc: "Verified & officially recognized by Winbox",
      icon: <ShieldCheck size={32} />,
      bg: "bg-white border-sky-100",
      iconColor: "text-sky-500",
      shadow: "shadow-sky-100"
    },
    {
      title: "Exclusive Offers",
      desc: "Enjoy rebates, bonuses, and more",
      icon: <Gift size={32} />,
      bg: "bg-white border-red-100",
      iconColor: "text-red-500",
      shadow: "shadow-red-100"
    },
    {
      title: "Fast Payouts",
      desc: "Quick, secure withdrawals",
      icon: <Zap size={32} />,
      bg: "bg-white border-blue-100",
      iconColor: "text-blue-500",
      shadow: "shadow-blue-100"
    },
    {
      title: "Seamless System",
      desc: "Instant connection between platforms",
      icon: <Server size={32} />,
      bg: "bg-white border-purple-100",
      iconColor: "text-purple-500",
      shadow: "shadow-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section with Video Background */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="https://illuminatelabs.space/asset/video/winbox_partnership_herosec.mp4" type="video/mp4" />
        </video>
        
        {/* Lighter overlay for bright theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-transparent to-slate-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-2xl"
          >
            Trusted Partnership <br />
            <span className="text-sky-200">Greater Success</span>
          </motion.h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-20 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-80"></div>
          
          <div className="inline-block border-2 border-yellow-500 rounded-full px-10 py-3 mb-8 shadow-lg shadow-yellow-500/20 bg-white/50">
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight">
              Official Trusted Partner
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Winbox proudly collaborates with <span className="text-sky-600 font-bold">Ez8</span> and <span className="text-yellow-600 font-bold">HengOngBet</span>. 
            Together, we deliver a secure, seamless, and rewarding experience for every player — ensuring transparency, 
            reliability, and world-class service across all platforms.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-bold uppercase tracking-widest text-xs shadow-sm">
            <ShieldCheck size={14} />
            Verified & Secure
          </div>
        </motion.div>
      </div>

      {/* Partner Cards - Redesigned based on reference */}
      <div className="max-w-5xl mx-auto px-4 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className={`relative ${partner.bgGradient} rounded-[2.5rem] p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300`}
            >
              {/* Header - Replaced with Big Centered Logo */}
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="h-24 mb-4 flex items-center justify-center w-full">
                   <img 
                     src={partner.logoUrl} 
                     alt={partner.name} 
                     className="h-full w-auto object-contain drop-shadow-md"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <p className="text-white/90 text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10 tracking-wide uppercase">{partner.joined}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20 w-full mb-6" />

              {/* Section 1: Welcome Bonus (Date Picker Style) */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold">Welcome Bonus</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                      <ChevronLeft size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {/* Active Box */}
                  <div className="bg-white rounded-2xl p-3 min-w-[90px] text-center shadow-lg transform scale-105">
                    <div className={`text-2xl font-black ${partner.buttonText}`}>{partner.bonus}</div>
                    <div className={`text-[10px] font-bold uppercase ${partner.buttonText} opacity-80`}>Bonus</div>
                  </div>
                  
                  {/* Inactive Box */}
                  <div className="border border-white/30 rounded-2xl p-3 min-w-[90px] text-center backdrop-blur-sm">
                    <div className="text-xl font-bold text-white">{partner.maxAmount}</div>
                    <div className="text-[10px] font-bold uppercase text-white/70">Max</div>
                  </div>

                  {/* Placeholder Box */}
                  <div className="border border-white/10 rounded-2xl p-3 min-w-[90px] text-center opacity-50">
                    <div className="text-xl font-bold text-white">...</div>
                    <div className="text-[10px] font-bold uppercase text-white/70">More</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20 w-full mb-6" />

              {/* Section 2: Highlights (Time Picker Style) */}
              <div className="mb-10">
                <h4 className="text-lg font-bold mb-4">Highlights</h4>
                <div className="flex flex-wrap gap-3">
                  {partner.highlights.map((highlight, hIdx) => (
                    <div 
                      key={hIdx} 
                      className={`rounded-xl px-4 py-2 text-sm font-bold border ${hIdx === 0 ? 'border-white bg-white/10' : 'border-white/30 text-white/80'}`}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button (Floating Style) */}
              <div className="flex justify-center -mb-14 relative z-10">
                <button className={`bg-white ${partner.buttonText} px-16 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2`}>
                  Play Now
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${feature.bg} border rounded-[2rem] p-8 text-center ${feature.shadow} shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-6 group bg-white`}
            >
              <div className={`p-5 rounded-2xl bg-slate-50 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300 ring-1 ring-slate-100`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-black text-xl text-slate-800 uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
