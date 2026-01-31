const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal-node").forEach((node) => observer.observe(node));

const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9FGpQzU8kN9RCNuVdvG-FrxnxeprXVKz82FZPFZ7gwsFb-1C2WM-uO1K32nK3f_06/exec";

const handleFormSubmit = (form) => {
    if (!form) return;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        if (!submitButton) return;
        if (!submitButton.dataset.defaultText) {
            submitButton.dataset.defaultText = submitButton.innerText;
        }

        submitButton.disabled = true;
        submitButton.innerText = "Enviando...";

        const formData = new FormData(form);

        fetch(scriptURL, { method: "POST", body: formData })
            .then(() => {
                form.reset();

                const success = document.createElement("span");
                success.className = "submit-success";
                success.innerHTML = "✔ Enviado com Sucesso!";
                submitButton.parentNode.insertBefore(success, submitButton.nextSibling);

                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerText = submitButton.dataset.defaultText;
                    success.remove();
                }, 2000);
            })
            .catch((error) => {
                submitButton.innerText = "Erro! Tente novamente";
                console.error("Erro ao enviar:", error);
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerText = submitButton.dataset.defaultText;
                }, 2000);
            });
    });
};

handleFormSubmit(document.getElementById("form-v"));
handleFormSubmit(document.getElementById("form-p"));

window.switchForm = (mode) => {
    const btnV = document.getElementById("btn-v");
    const btnP = document.getElementById("btn-p");
    const formV = document.getElementById("form-v");
    const formP = document.getElementById("form-p");
    const joinSection = document.querySelector("[data-join-section]");
    const joinTitle = document.querySelector("[data-join-title]");

    if (!btnV || !btnP || !formV || !formP || !joinSection || !joinTitle) return;

    joinSection.classList.add("transition-colors", "duration-700");
    joinTitle.classList.add("transition-colors", "duration-700");

    if (mode === "volunteer") {
        formV.classList.add("active");
        formP.classList.remove("active");
        btnV.className =
            "flex-1 py-3 rounded-xl font-bold text-sm bg-white text-zinc-950 shadow-sm transition-all";
        btnP.className =
            "flex-1 py-3 rounded-xl font-bold text-sm text-zinc-500 hover:text-zinc-800 transition-all";
        joinSection.classList.remove("bg-[#FACC15]");
        joinSection.classList.add("bg-[#700EBB]");
        joinTitle.classList.remove("text-zinc-950");
        joinTitle.classList.add("text-white");
    } else {
        formP.classList.add("active");
        formV.classList.remove("active");
        btnP.className =
            "flex-1 py-3 rounded-xl font-bold text-sm bg-white text-zinc-950 shadow-sm transition-all";
        btnV.className =
            "flex-1 py-3 rounded-xl font-bold text-sm text-zinc-500 hover:text-zinc-800 transition-all";
        joinSection.classList.remove("bg-[#700EBB]");
        joinSection.classList.add("bg-[#FACC15]");
        joinTitle.classList.remove("text-white");
        joinTitle.classList.add("text-zinc-950");
    }
};

window.switchForm("volunteer");

const header = document.getElementById("main-header");
let isTicking = false;

const updateHeader = () => {
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add("py-3", "bg-[#050505]/95");
        header.classList.remove("py-5");
    } else {
        header.classList.add("py-5");
        header.classList.remove("py-3", "bg-[#050505]/95");
    }
    isTicking = false;
};

updateHeader();
window.addEventListener(
    "scroll",
    () => {
        if (!isTicking) {
            window.requestAnimationFrame(updateHeader);
            isTicking = true;
        }
    },
    { passive: true }
);
