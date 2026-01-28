
import React, { useState } from 'react';

type FormMode = 'volunteer' | 'project';

const ContactForm: React.FC = () => {
  const [mode, setMode] = useState<FormMode>('volunteer');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = ''; // URL para integração futura

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulação de envio (já que a URL está vazia)
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <section id="join" className="py-32 bg-[#FACC15] relative overflow-hidden scroll-mt-24">
        {/* Gráfico Decorativo */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal-node">
            <h2 className="text-4xl md:text-[52px] font-[900] text-zinc-950 mb-8 leading-[1.1] tracking-tight">
              O Brasil precisa de coragem.<br />Guarulhos precisa de ação.
            </h2>
            <p className="text-lg md:text-xl font-medium text-zinc-900/80">
              Escolha como você quer contribuir com a nossa caminhada.
            </p>
          </div>

          <div className="max-w-[580px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] reveal-node">
            {/* Seletor de Modo (Abas) */}
            <div className="flex p-1 bg-zinc-100 rounded-2xl mb-10">
              <button 
                onClick={() => setMode('volunteer')}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'volunteer' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
              >
                Seja Voluntário
              </button>
              <button 
                onClick={() => setMode('project')}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'project' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
              >
                Sugerir Projeto
              </button>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-zinc-950 text-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-12">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-zinc-950 mb-2">Mensagem Recebida!</h3>
                <p className="text-zinc-500 font-medium">Obrigado por fortalecer a Missão.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'volunteer' ? (
                  // Campos Voluntário
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <input name="nome" type="text" placeholder="Seu nome" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    
                    <input name="telefone" type="tel" placeholder="Telefone / WhatsApp" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    
                    <input name="como_ajudar" type="text" placeholder="Como você poderia ajudar?" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    
                    <input name="cidade" type="text" placeholder="Sua Cidade" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                  </div>
                ) : (
                  // Campos Sugestão de Projeto
                  <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                    <input name="nome_projeto" type="text" placeholder="Nome do Projeto" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    
                    <input name="no_que_ajudaria" type="text" placeholder="No que ele ajudaria a cidade?" required 
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    
                    <textarea name="resumo_ideia" placeholder="Resumo da sua ideia..." required rows={3}
                      className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400 resize-none"></textarea>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="telefone" type="tel" placeholder="Seu Telefone" required 
                        className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                      <input name="nome_pessoa" type="text" placeholder="Seu Nome" required 
                        className="w-full border border-zinc-200 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all font-medium text-zinc-700 bg-white placeholder:text-zinc-400" />
                    </div>
                  </div>
                )}
                
                <button type="submit" disabled={status === 'submitting'}
                  className="w-full bg-[#FACC15] text-zinc-950 py-5 rounded-xl font-black text-xl hover:bg-yellow-400 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 mt-6">
                  {status === 'submitting' ? 'ENVIANDO...' : 'Enviar para a Missão'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Nova Seção: Filiação na Missão */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center reveal-node">
          <div className="w-20 h-20 mb-8 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
             <img src="https://lh3.googleusercontent.com/d/1sujReY-tbimNvA0ovrNvYlAxFHPhPNvR" alt="Logo Missão" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Filie-se à <span className="text-yellow-400 italic">Missão</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed">
            Não seja apenas um espectador. Torne-se parte oficial do partido que vai mudar as estruturas do Brasil. A filiação é o primeiro passo para uma atuação política séria e comprometida.
          </p>
          
          <a 
            href="https://missao.org.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 bg-white text-zinc-950 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-yellow-400 transition-all duration-500 hover:scale-105 shadow-2xl"
          >
            Quero me filiar agora
            <svg className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <div className="mt-16 flex items-center gap-4 text-zinc-600 font-bold text-xs uppercase tracking-[0.3em]">
            <span className="w-12 h-[1px] bg-zinc-800"></span>
            Partido Missão 14
            <span className="w-12 h-[1px] bg-zinc-800"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
