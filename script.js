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
    // disciplina: agrupa os cards por matéria (a ordem segue a lista "disciplinas" abaixo)
    // Os arquivos ficam em projetos/academicos/<disciplina>/

    // Lógica de Programação
    {
        titulo: "Caderno de Exercícios em Python",
        tipo: "academico",
        disciplina: "Lógica de Programação",
        periodo: "2026",
        papel: "Atividades das aulas",
        capaCodigo: "def par_ou_impar(valor_1, valor_2):\n  return \"PAR\" if (valor_1 + valor_2) % 2 == 0 \\\n         else \"IMPAR\"\n\nmatch escolha_dia:\n  case 1: print(\"Hoje é SEGUNDA-FEIRA\")",
        descricao: "Notebook no Google Colab com os exercícios das aulas de Lógica de Programação, da primeira variável até estruturas condicionais.",
        destaques: [
            "Variáveis, tipos de dados, entradas (input) e formatação de saída com f-strings",
            "Calculadora com operadores aritméticos e testes de precedência",
            "Listas, tuplas, dicionários e importação de bibliotecas",
            "Jogo \"Par ou Ímpar\" com função própria",
            "Desvio condicional com if/elif/else e match case"
        ],
        tecnologias: ["Python", "Google Colab"],
        links: [{ rotulo: "Abrir no Google Colab", url: "https://colab.research.google.com/drive/19BWujYyYQAlu9SZgKap3XbYY8V0YyZ-R?usp=sharing" }]
    },

    // Banco de Dados
    {
        titulo: "Modelo Conceitual — Delivery de Comida (iFood)",
        tipo: "academico",
        disciplina: "Banco de Dados",
        periodo: "Ago 2026",
        papel: "Exercício individual",
        capa: "projetos/academicos/banco-de-dados/capa-ifood.jpg",
        descricao: "Modelagem conceitual de um aplicativo de delivery no estilo iFood, identificando as entidades do negócio e seus atributos.",
        destaques: [
            "8 entidades: Cliente, Endereço, Restaurante, Categoria, Seção, Produto, Adicional e Pedido",
            "Definição de atributos identificadores (CPF, CNPJ, IDs)",
            "Atributos de preço, frete, status e tempo de preparo"
        ],
        tecnologias: ["Modelagem conceitual", "brModelo"],
        links: [{ rotulo: "Ver diagrama (PDF)", url: "projetos/academicos/banco-de-dados/Exercicio_Ifood_PedroImanichi.pdf" }]
    },
    {
        titulo: "Modelo Conceitual — Sistema Hospitalar",
        tipo: "academico",
        disciplina: "Banco de Dados",
        periodo: "Ago 2026",
        papel: "Exercício individual",
        capa: "projetos/academicos/banco-de-dados/capa-hospital-conceitual.jpg",
        descricao: "Levantamento das entidades e atributos de um hospital completo: pacientes, equipe médica, internações, exames, receitas e faturamento.",
        destaques: [
            "19 entidades, de Cadastro de Paciente a Faturamento Hospitalar",
            "Atributos do domínio da saúde: CRM, COREN, CID-10, registro ANS",
            "Base para o modelo ER com relacionamentos (próximo projeto)"
        ],
        tecnologias: ["Modelagem conceitual", "brModelo"],
        links: [{ rotulo: "Ver diagrama (PDF)", url: "projetos/academicos/banco-de-dados/Exercicio_Hospital_PedroImanichi.pdf" }]
    },
    {
        titulo: "Modelo ER — Hospital com Relacionamentos",
        tipo: "academico",
        disciplina: "Banco de Dados",
        periodo: "Set 2026",
        papel: "Correção da Aula 05",
        capa: "projetos/academicos/banco-de-dados/capa-hospital-er.jpg",
        descricao: "Versão revisada do modelo hospitalar, agora com relacionamentos e cardinalidades entre as entidades.",
        destaques: [
            "Relacionamentos como Atende, Solicita, Realiza, Auxilia e Aplica",
            "Cardinalidades (1,1), (0,n), (1,n) definidas para cada ligação",
            "Fluxo completo: consulta → exame → prescrição → internação"
        ],
        tecnologias: ["Modelo Entidade-Relacionamento", "brModelo"],
        links: [{ rotulo: "Ver diagrama (PDF)", url: "projetos/academicos/banco-de-dados/Correcao_Aula05_PedroImanichi.pdf" }]
    },
    {
        titulo: "Modelo Lógico — Pet Shop",
        tipo: "academico",
        disciplina: "Banco de Dados",
        papel: "Exercício individual",
        capa: "projetos/academicos/banco-de-dados/capa-petshop.jpg",
        descricao: "Modelo lógico de um pet shop pronto para virar banco de dados, com tabelas, tipos de dados e chaves.",
        destaques: [
            "5 tabelas: Cliente, Pet, Serviço, Funcionário e Agendamento",
            "Chaves primárias e estrangeiras ligando pet, serviço e funcionário ao agendamento",
            "Tipos de dados definidos (INT, VARCHAR, DECIMAL, DATETIME)"
        ],
        tecnologias: ["Modelo lógico", "MySQL Workbench", "SQL"],
        links: [{ rotulo: "Ver modelo (PNG)", url: "projetos/academicos/banco-de-dados/modelo_petshop_PedroImanichi.png" }]
    },

    // Engenharia de Software
    {
        titulo: "Micro-seminário — A Evolução dos Dispositivos de Armazenamento",
        tipo: "academico",
        disciplina: "Engenharia de Software",
        periodo: "Ago 2026",
        papel: "Trabalho em grupo (5 integrantes)",
        capa: "projetos/academicos/engenharia-de-software/capa-seminario.jpg",
        descricao: "Apresentação sobre a evolução do armazenamento de dados e o impacto dos SSDs NVMe na velocidade de execução.",
        destaques: [
            "Linha do tempo: cartões perfurados, fitas, disquetes, HDD, SSD SATA e NVMe",
            "Comparativo SATA × PCIe e latência × taxa de transferência",
            "Por que o NVMe é mais rápido e onde ele faz diferença no uso real",
            "Quiz interativo com a turma ao final"
        ],
        tecnologias: ["Apresentação", "Hardware", "Trabalho em equipe"],
        links: [{ rotulo: "Baixar slides (.pptx)", url: "projetos/academicos/engenharia-de-software/seminario-armazenamento-nvme.pptx" }]
    }
];

// Ordem em que as disciplinas aparecem na seção de projetos acadêmicos
const disciplinas = ["Lógica de Programação", "Banco de Dados", "Engenharia de Software"];

// Escapa texto para exibir com segurança dentro do HTML
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Rótulo de cada card: "Pessoal · 01" ou, nos acadêmicos, a disciplina ("Banco de Dados · 02")
const contagem = {};
projetos.forEach(p => {
    p.rotulo = p.tipo === "academico" ? p.disciplina : "Pessoal";
    contagem[p.rotulo] = (contagem[p.rotulo] || 0) + 1;
    p.numero = String(contagem[p.rotulo]).padStart(2, "0");
});

function renderCapa(p) {
    if (p.capa) return `<div class="card__cover"><img src="${p.capa}" alt="Imagem do projeto ${esc(p.titulo)}" loading="lazy"></div>`;
    if (p.capaCodigo) return `<div class="card__cover card__cover--code"><pre>${esc(p.capaCodigo)}</pre></div>`;
    return "";
}

function renderGrupo(titulo, lista, classe = "") {
    if (!lista.length) return "";
    const qtd = `${lista.length} projeto${lista.length > 1 ? "s" : ""}`;
    return `
        <div class="project-group ${classe}">
            <h3 class="project-group__title">${esc(titulo)} <span>${qtd}</span></h3>
            <div class="projects">${lista.map(renderCard).join("")}</div>
        </div>`;
}

function renderProjetos(filtro = "todos") {
    const container = document.getElementById("projectsGrid");
    let html = "";

    if (filtro !== "academico") {
        html += `<h3 class="project-section-title">Projetos pessoais</h3>`;
        html += `<div class="projects">${projetos.filter(p => p.tipo === "pessoal").map(renderCard).join("")}</div>`;
    }
    if (filtro !== "pessoal") {
        html += `<h3 class="project-section-title">Projetos acadêmicos</h3>`;
        html += disciplinas
            .map(d => renderGrupo(d, projetos.filter(p => p.tipo === "academico" && p.disciplina === d), "project-group--subject"))
            .join("");
    }
    container.innerHTML = html;
}

function renderCard(p) {
    return `
        <article class="card">
            ${renderCapa(p)}
            <div class="card__body">
                <div class="card__top">
                    <span class="card__badge">${esc(p.rotulo)} · ${p.numero}</span>
                    ${p.periodo ? `<span class="card__date">${p.periodo}</span>` : ""}
                </div>
                <h3>${esc(p.titulo)}</h3>
                ${p.papel ? `<p class="card__role">${esc(p.papel)}</p>` : ""}
                <p>${esc(p.descricao)}</p>
                ${p.destaques && p.destaques.length ? `<ul class="card__highlights">${p.destaques.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
                <ul class="card__tech">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
                ${p.links && p.links.length ? `<div class="card__links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.rotulo)} →</a>`).join("")}</div>` : ""}
            </div>
        </article>`;
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
