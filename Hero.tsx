
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <span className="text-yellow-400 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
            Pré-candidata a Deputada Federal
          </span>
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <span className="text-white">Ludymilla</span>
          <span className="text-yellow-400">Dias</span>
        </h1>

        {/* Primary Slogan */}
        <p className="text-lg md:text-2xl text-zinc-100 font-medium max-w-2xl mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Liberdade, responsabilidade e uma nova geração política.
        </p>

        {/* Secondary Info */}
        <p className="text-xs md:text-sm text-zinc-500 font-bold tracking-tight mb-8 opacity-80 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Porta-voz oficial do MBL • Fundadora de honra do Partido Missão
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-yellow-400 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="font-bold text-sm tracking-tight">Guarulhos, São Paulo</span>
        </div>

        {/* Action Buttons with Links */}
        <div className="flex flex-col w-full gap-4 max-w-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <a href="#defense" className="w-full bg-yellow-400 text-zinc-950 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(250,204,21,0.3)] flex items-center justify-center">
            Conheça Minhas Propostas
          </a>
          <a href="#join" className="w-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 text-white py-5 rounded-2xl font-black text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center">
            Faça Parte da Missão
          </a>
        </div>

        {/* Footer Pill */}
        <div className="mt-16 inline-flex items-center gap-3 bg-zinc-950 border border-zinc-800 px-8 py-4 rounded-full animate-in fade-in zoom-in-95 duration-1000 delay-700">
          <span className="text-yellow-400 font-black italic text-xl">14</span>
          <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Partido Missão</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
