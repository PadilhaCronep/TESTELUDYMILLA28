
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo link para o topo com imagem oficial e texto atualizado */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <div className="h-12 w-auto overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1sujReY-tbimNvA0ovrNvYlAxFHPhPNvR" 
              alt="Logo Missão - Ludymilla Dias" 
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-[10px] tracking-[0.15em] uppercase leading-none">Ludymilla Dias</span>
            <span className="text-yellow-400 font-bold text-[8px] uppercase tracking-[0.2em] mt-1">Pela Missão</span>
          </div>
        </a>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/70 hover:text-yellow-400 text-[10px] font-black uppercase tracking-widest transition-colors">Sobre</a>
          <a href="#defense" className="text-white/70 hover:text-yellow-400 text-[10px] font-black uppercase tracking-widest transition-colors">Propostas</a>
          <a href="#join" className="bg-yellow-400 text-zinc-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Apoiar</a>
        </nav>

        {/* Menu Hamburguer (Mobile) */}
        <button className="text-white p-2 md:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
