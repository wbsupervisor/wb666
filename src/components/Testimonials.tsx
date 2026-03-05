import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials = () => {
  const reviews: Testimonial[] = [
    { title: "The Crypto Casino of My Choice", content: "Depositing and withdrawing crypto with Winbox is smooth and hassle-free—unlike many other platforms that don't even support it.", stars: 5 },
    { title: "Super fast withdrawals", content: "Winbox withdrawals is super fast. I was able to withdraw my winnings within 15 minutes. Thanks to the winnings from Winbox, I managed to settle my outstanding housing loan.", stars: 5 },
    { title: "Unbeatable Payouts!", content: "Winbox is by far the best platform I've ever used! It offers the highest payout rates and the most rewarding promotions—truly a game-changer for online betting.", stars: 5 },
    { title: "Best Mobile App", content: "The Winbox app is so intuitive. I can play my favorite slots anywhere, anytime. The interface is clean and it never lags even on my older phone.", stars: 5 },
    { title: "Amazing Customer Service", content: "Had an issue with my deposit and the support team fixed it within minutes. Truly 24/7 professional service that you can rely on.", stars: 5 },
    { title: "Huge Variety of Slots", content: "I've never seen so many slot providers in one place. From 918Kiss to Pragmatic Play, Winbox has everything a slot lover needs.", stars: 5 },
    { title: "Safe and Secure", content: "I feel very safe playing here. The security measures are top-notch and I've never had any issues with my personal data or funds.", stars: 5 },
    { title: "Great Bonuses", content: "The daily bonuses and turnover rewards are actually achievable. It's not like other sites where the requirements are impossible.", stars: 5 },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tight text-gold-outline">User Testimonials</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">What our players say about us</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm bg-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm bg-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
        >
          {reviews.map((r, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 h-full flex flex-col space-y-6 hover:shadow-xl transition-shadow duration-500">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={12} />
                    Verified Player
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight leading-tight">
                    "{r.title}"
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium italic">
                    {r.content}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-black">
                    {r.title.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-800 uppercase tracking-tight">Winbox Member</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">March 2026</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
