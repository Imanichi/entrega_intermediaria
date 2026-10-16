// ============================================================
// SEUS PROJETOS — edite esta lista para adicionar/remover projetos.
// tipo: "pessoal" ou "academico"
// capa: caminho de uma imagem (opcional). Sem capa, o card mostra "capaCodigo".
// destaques: o que você fez / aprendeu (aparece como lista no card)
// links: [{ rotulo: "Código", url: "..." }]
// Os arquivos dos projetos pessoais ficam em projetos/pessoais/<projeto>/
// ============================================================
const projetos = [
    // ---------- PROJETOS PESSOAIS ----------
    {
        titulo: "Depart Arq — Site de Escritório de Arquitetura",
        tipo: "pessoal",
        periodo: "Dez 2023 – Mai 2024",
        papel: "Projeto em equipe (4 devs)",
        capa: "projetos/pessoais/depart-arq/capa.jpg",
        descricao: "Plataforma web para o escritório de arquitetura Depart Arq, com portfólio de obras, página da equipe e formulário de orçamento.",
        destaques: [
            "Carrossel de imagens em tela cheia na página inicial",
            "Páginas individuais de projetos (Quarto G, AP 102, AP 104, AP 106, Banho 212)",
            "Site bilíngue: português e inglês",
            "Formulário de orçamento com validação em JavaScript"
        ],
        tecnologias: ["HTML", "CSS", "JavaScript", "Slick Carousel", "Git"],
        links: []
    },
    {
        titulo: "Automação de Dados do SICONV",
        tipo: "pessoal",
        periodo: "Nov 2023",
        papel: "Projeto individual",
        capaCodigo: "NR_CONVENIO  SIT_CONVENIO   VL_GLOBAL\n916828       Em execução    1.547.828\n931241       Em execução      155.039\n…            …              …\n\n✓ download  ✓ unzip  ✓ filtro  ✓ csv",
        descricao: "Script que baixa a base de convênios do Portal de Dados Abertos do governo federal, extrai, filtra os convênios de interesse e gera uma planilha enxuta.",
        destaques: [
            "Web scraping da página de downloads com BeautifulSoup",
            "Download e descompactação automática do .zip",
            "Filtragem de linhas e colunas com Pandas",
            "Registro da hora da atualização (fuso de Brasília) e limpeza dos arquivos temporários"
        ],
        tecnologias: ["Python", "Pandas", "Requests", "BeautifulSoup"],
        links: [
            { rotulo: "Código", url: "projetos/pessoais/automacao-siconv/main.py" },
            { rotulo: "Planilha gerada", url: "projetos/pessoais/automacao-siconv/planilha_filtrada.csv" }
        ]
    },
    {
        titulo: "Curso de Python — Exercícios",
        tipo: "pessoal",
        periodo: "Nov 2023",
        papel: "Estudos",
        capa: "projetos/pessoais/curso-python/capa-modelo-siconv.jpg",
        descricao: "Exercícios feitos durante um curso de Python: da lógica básica à leitura de dados reais do modelo de banco de dados do SICONV.",
        destaques: [
            "Jogo de adivinhação no terminal (laços, condicionais, entrada do usuário)",
            "Leitura de tabelas HTML com pandas.read_html",
            "Exploração do modelo de dados do SICONV (diagrama gerado com SchemaSpy)"
        ],
        tecnologias: ["Python", "Pandas"],
        links: [
            { rotulo: "Jogo de adivinhação", url: "projetos/pessoais/curso-python/aula_1.py" },
            { rotulo: "Leitura de dados", url: "projetos/pessoais/curso-python/teste_leitura.py" }
        ]
    },

    // ---------- PROJETOS ACADÊMICOS ----------
    {
        titulo: "Projeto Acadêmico 1",
        tipo: "academico",
        descricao: "Descreva o problema, o que você fez e o resultado. Mencione a disciplina.",
        tecnologias: ["Python", "Pandas"],
        links: []
    },
    {
        titulo: "Projeto Acadêmico 2",
        tipo: "academico",
        descricao: "Trabalho em grupo da disciplina X — explique seu papel no time.",
        tecnologias: ["Java"],
        links: []
    }
];

const rotulos = { pessoal: "Pessoal", academico: "Acadêmico" };

// Escapa texto para exibir com segurança dentro do HTML
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Numera cada projeto dentro da sua categoria: "Pessoal · 01", "Pessoal · 02"...
const contagem = {};
projetos.forEach(p => {
    contagem[p.tipo] = (contagem[p.tipo] || 0) + 1;
    p.numero = String(contagem[p.tipo]).padStart(2, "0");
});

function renderCapa(p) {
    if (p.capa) return `<div class="card__cover"><img src="${p.capa}" alt="Imagem do projeto ${esc(p.titulo)}" loading="lazy"></div>`;
    if (p.capaCodigo) return `<div class="card__cover card__cover--code"><pre>${esc(p.capaCodigo)}</pre></div>`;
    return "";
}

function renderProjetos(filtro = "todos") {
    const grid = document.getElementById("projectsGrid");
    const lista = filtro === "todos" ? projetos : projetos.filter(p => p.tipo === filtro);

    grid.innerHTML = lista.map(p => `
        <article class="card">
            ${renderCapa(p)}
            <div class="card__body">
                <div class="card__top">
                    <span class="card__badge">${rotulos[p.tipo]} · ${p.numero}</span>
                    ${p.periodo ? `<span class="card__date">${p.periodo}</span>` : ""}
                </div>
                <h3>${esc(p.titulo)}</h3>
                ${p.papel ? `<p class="card__role">${esc(p.papel)}</p>` : ""}
                <p>${esc(p.descricao)}</p>
                ${p.destaques && p.destaques.length ? `<ul class="card__highlights">${p.destaques.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
                <ul class="card__tech">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
                ${p.links && p.links.length ? `<div class="card__links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.rotulo)} →</a>`).join("")}</div>` : ""}
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
