
import React from 'react';

const SocialMedia: React.FC = () => {
  const instagramLink = "https://www.instagram.com/aludydias?igsh=MmVyajdqbjJiZHdq";
  const twitterLink = "https://x.com/Aludydias_";
  const profileImage = "https://lh3.googleusercontent.com/d/1VMrXH9LqpXJXw3xfFhMh8GTGHou2dgt-";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Acompanhe a <span className="text-yellow-500">Missão</span></h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Siga nossas redes e fique por dentro de cada passo da nossa caminhada.</p>
        </div>

        {/* Grid com Instagram e Twitter (X) com links reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 reveal max-w-4xl mx-auto">
          {[
            { name: 'Instagram', url: instagramLink, color: 'hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600' },
            { name: 'Twitter', url: twitterLink, color: 'hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600' }
          ].map((social, i) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-4 p-10 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all duration-300 font-black text-2xl group ${social.color}`}>
              <span>{social.name}</span>
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col md:flex-row reveal">
          <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden group">
             <img src="https://lh3.googleusercontent.com/d/1GO_jnnAGdankYM1fJCKDQEzO949NyR64" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ludymilla em ação" />
             <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center transition-opacity group-hover:bg-zinc-950/20">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group/btn">
                  <svg className="w-10 h-10 text-zinc-950 ml-1.5 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.5 3a.5.5 0 00-.74.43v13.14a.5.5 0 00.74.43l11.5-6.57a.5.5 0 000-.86L4.5 3z" />
                  </svg>
                </a>
             </div>
          </div>
          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-yellow-400 border border-yellow-400/20">
                <img src={profileImage} alt="Ludymilla Dias" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-xl leading-none">Ludymilla</p>
                <p className="text-zinc-500 font-bold text-sm tracking-wider mt-1">@aludydias</p>
              </div>
            </div>
            <p className="text-zinc-300 text-xl md:text-2xl font-medium mb-10 italic leading-relaxed">
              "Juntos somos a força que vai mudar o rumo da nossa cidade. Guarulhos não pode mais esperar por velhas soluções."
            </p>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-black text-lg hover:text-white transition-colors flex items-center gap-3 group w-fit">
              Ver no Instagram
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
