
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden scroll-mt-24" role="region" aria-labelledby="about-title">
      
      {/* Elemento Gráfico de Fundo: Watermark Monumental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
        <span className="text-[20vw] font-black text-zinc-950 opacity-[0.03] leading-none tracking-tighter block text-center">
          MISSÃO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-stretch">
          
          {/* Lado da Imagem com Camadas Gráficas */}
          <div className="lg:w-[45%] relative reveal-node">
            
            {/* Camada Geométrica de Acento (Atrás da Imagem) */}
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-yellow-400/20 rounded-[3rem] -z-10"></div>
            <div className="absolute top-6 left-6 w-full h-full bg-yellow-400 rounded-[3rem] -z-20 opacity-10"></div>
            
            {/* Container da Imagem Principal */}
            <div className="h-[500px] md:h-[700px] w-full overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group border border-zinc-100 relative bg-zinc-50">
              <img 
                src="https://lh3.googleusercontent.com/d/1VMrXH9LqpXJXw3xfFhMh8GTGHou2dgt-" 
                alt="Ludymilla Dias" 
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay sutil para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
              
              {/* Elemento Gráfico Flutuante: Badge de Identidade Atualizado */}
              <div className="absolute bottom-8 right-8 bg-[#050505] p-6 rounded-[2rem] shadow-2xl border border-zinc-800 flex items-center gap-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                <div className="w-14 h-14 overflow-hidden rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1sujReY-tbimNvA0ovrNvYlAxFHPhPNvR" 
                    alt="Logo Missão" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Pré-candidata</span>
                  <span className="text-white text-xl font-black italic leading-none uppercase">Missão</span>
                </div>
              </div>
            </div>

            {/* Grafismo Lateral (Pontos Decorativos) */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-10 pointer-events-none hidden md:block">
              <div className="grid grid-cols-4 gap-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-zinc-950 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lado do Conteúdo (Texto) */}
          <div className="lg:w-[55%] flex flex-col justify-center reveal-node" style={{ transitionDelay: '300ms' }}>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                <span className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.4em]">Trajetória de Coragem</span>
              </div>
              <span className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </div>

            {/* Headline Atualizada */}
            <h2 id="about-title" className="text-5xl md:text-7xl lg:text-[80px] font-black mb-10 leading-[0.9] tracking-tighter text-zinc-950">
              Uma nova voz para <br />
              <span className="text-yellow-500 italic">São Paulo no Congresso Nacional.</span>
            </h2>
            
            <div className="space-y-8 text-zinc-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              <p>
                Sou <strong className="text-zinc-950">Ludymilla Dias de Oliveira</strong>, pré-candidata a deputada federal pelo Estado de São Paulo. Nasci e cresci na cidade de <strong className="text-zinc-950">Arujá</strong>, na região metropolitana de São Paulo, em uma família que pode me dar estrutura, passar valores e princípios para ser a mulher de hoje!
              </p>
              <p>
                Atuo no <span className="text-zinc-950 font-bold border-b-2 border-yellow-400/30">Movimento Brasil Livre</span> há 3 anos e sou Fundadora de Honra do <span className="text-zinc-950 font-bold border-b-2 border-yellow-400/30">Partido Missão</span>. Acredito que a política precisa passar por uma reestruturação, e estou pronta para contribuir com esta mudança.
              </p>
              <p>
                Mesmo jovem, sempre tive o senso de <strong className="text-zinc-950 italic">Missão</strong> a cumprir dentro de mim. Vim ao mundo para fazer a diferença, trazer mudanças e melhorias.
              </p>
            </div>

            <div className="mt-12">
              <a href="#defense" className="inline-flex items-center gap-4 bg-zinc-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 hover:text-zinc-950 transition-all group">
                Conheça minhas propostas
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
