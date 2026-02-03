/**
 * 1. Intersection Observer for Scroll Reveal
 */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-node').forEach(node => {
        observer.observe(node);
    });
});

/**
 * 2. Contact Form Submission Logic (Updated for new fields)
 */
const formContainer = document.getElementById('form-container');
const forms = [
  document.getElementById('form-v'),
  document.getElementById('form-p'),
].filter(Boolean);

forms.forEach((form) => {
  if (form.dataset.bound === '1') return;
  form.dataset.bound = '1';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!formContainer) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Dados do Formulário:', data);

    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'PROCESSANDO...';

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      formContainer.innerHTML = `
        <div class="text-center py-16 animate-in fade-in zoom-in duration-500">
          <div class="w-24 h-24 bg-zinc-950 text-yellow-400 rounded-[2rem] flex items-center justify-center mx-auto mb-8 rotate-12 shadow-2xl">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-4xl font-[900] text-zinc-950 mb-3 tracking-tighter italic">Bem-vindo à Missão!</h3>
          <p class="text-zinc-600 font-bold text-lg max-w-[80%] mx-auto">Seus dados foram recebidos. Vamos construir um novo Brasil juntos!</p>
        </div>
      `;
    } catch (error) {
      console.error('Erro ao enviar:', error);
      submitBtn.textContent = 'ERRO AO ENVIAR';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }, 3000);
    }
  });
});
