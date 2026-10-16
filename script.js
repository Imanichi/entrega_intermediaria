// ============================================================
// SEUS PROJETOS — edite esta lista para adicionar/remover projetos.
// tipo: "pessoal" ou "academico"
// ============================================================
const projetos = [
    {
        titulo: "Site Portfólio",
        tipo: "pessoal",
        descricao: "Este site! Um portfólio responsivo com tema claro/escuro e filtro de projetos.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Imanichi/entrega_intermediaria",
        demo: ""
    },
    {
        titulo: "Projeto Acadêmico 1",
        tipo: "academico",
        descricao: "Descreva o problema, o que você fez e o resultado. Mencione a disciplina.",
        tecnologias: ["Python", "Pandas"],
        github: "",
        demo: ""
    },
    {
        titulo: "Projeto Acadêmico 2",
        tipo: "academico",
        descricao: "Trabalho em grupo da disciplina X — explique seu papel no time.",
        tecnologias: ["Java"],
        github: "",
        demo: ""
    },
    {
        titulo: "Projeto Pessoal 2",
        tipo: "pessoal",
        descricao: "Algo que você construiu por curiosidade ou para resolver um problema seu.",
        tecnologias: ["JavaScript", "API"],
        github: "",
        demo: ""
    }
];

const rotulos = { pessoal: "Pessoal", academico: "Acadêmico" };

function renderProjetos(filtro = "todos") {
    const grid = document.getElementById("projectsGrid");
    const lista = filtro === "todos" ? projetos : projetos.filter(p => p.tipo === filtro);

    grid.innerHTML = lista.map(p => `
        <article class="card">
            <span class="card__badge">${rotulos[p.tipo]}</span>
            <h3>${p.titulo}</h3>
            <p>${p.descricao}</p>
            <ul class="card__tech">${p.tecnologias.map(t => `<li>${t}</li>`).join("")}</ul>
            <div class="card__links">
                ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Código →</a>` : ""}
                ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : ""}
            </div>
        </article>
    `).join("");
}

// Filtros
document.querySelectorAll(".filter").forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector(".filter.is-active").classList.remove("is-active");
        botao.classList.add("is-active");
        renderProjetos(botao.dataset.filter);
    });
});

// Tema claro/escuro (lembra a escolha do visitante)
const root = document.documentElement;
let temaSalvo = null;
try { temaSalvo = localStorage.getItem("tema"); } catch (e) {}
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = temaSalvo || (prefereEscuro ? "dark" : "light");

document.getElementById("themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("tema", root.dataset.theme); } catch (e) {}
});

// Menu mobile
const navLinks = document.getElementById("navLinks");
document.getElementById("menuToggle").addEventListener("click", () => navLinks.classList.toggle("is-open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("is-open")));

document.getElementById("year").textContent = new Date().getFullYear();
renderProjetos();
