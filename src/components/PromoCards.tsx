import React from 'react';

interface Stat {
  title: string;
  subtitle: string;
}

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end items-center text-white text-center p-4">
        <h3 className="text-3xl font-black text-white drop-shadow-md">{stat.title}</h3>
        <p className="text-sm font-bold uppercase tracking-widest text-blue-200/90">{stat.subtitle}</p>
      </div>
    </div>
  );
};

export const PromoCards = () => {
  const stats = [
    { title: "1M+", subtitle: "Active Users" },
    { title: "99.9%", subtitle: "Satisfied Rate"},
    { title: "500+", subtitle: "Live Games"},
    { title: "100%", subtitle: "Security Certification"},
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gold-outline">Platform Highlights</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>
    </div>
  );
};
