# Bootcamp 1 – Entrega do Projeto Intermediário

Este repositório contém o nosso projeto intermediário do curso, reunindo projetos pessoais e acadêmicos desenvolvidos ao longo do curso de Engenharia de Software.

O repositório inclui um site de portfólio que será hospedado no GitHub Pages. O site foi construído com HTML, CSS e JavaScript, com o apoio dos recursos de inteligência artificial do Claude durante todo o processo de desenvolvimento.

O objetivo deste projeto é apresentar o nosso trabalho, destacar as nossas habilidades e mostrar os projetos que desenvolvemos ao longo da nossa trajetória acadêmica e em iniciativas pessoais.

---

## Sumário

1. [Estrutura do repositório](#estrutura-do-repositório)
2. [Arquivos da raiz](#arquivos-da-raiz)
3. [Pasta `projetos/`](#pasta-projetos)
   - [`projetos/pessoais/`](#projetospessoais)
   - [`projetos/academicos/`](#projetosacademicos)
4. [Como os arquivos se conectam](#como-os-arquivos-se-conectam)
5. [Como adicionar um novo projeto](#como-adicionar-um-novo-projeto)
6. [Como visualizar o site](#como-visualizar-o-site)

---

## Estrutura do repositório

```
entrega_intermediaria/
│
├── index.html                  → Página do site (estrutura e conteúdo)
├── style.css                   → Aparência do site (cores, layout, responsividade)
├── script.js                   → Lista de projetos e interatividade do site
├── README.md                   → Este documento
├── .gitignore                  → Arquivos que o Git deve ignorar
│
└── projetos/                   → Arquivos dos projetos exibidos no site
    │
    ├── pessoais/               → Projetos feitos por iniciativa própria
    │   ├── depart-arq/
    │   │   ├── capa.jpg
    │   │   └── planta-ap106.jpg
    │   ├── automacao-siconv/
    │   │   ├── main.py
    │   │   └── planilha_filtrada.csv
    │   └── curso-python/
    │       ├── aula_1.py
    │       ├── teste_leitura.py
    │       └── capa-modelo-siconv.jpg
    │
    └── academicos/             → Trabalhos das disciplinas da faculdade
        ├── banco-de-dados/
        │   ├── Exercicio_Ifood_PedroImanichi.pdf
        │   ├── Exercicio_Hospital_PedroImanichi.pdf
        │   ├── Correcao_Aula05_PedroImanichi.pdf
        │   ├── modelo_petshop_PedroImanichi.png
        │   ├── capa-ifood.jpg
        │   ├── capa-hospital-conceitual.jpg
        │   ├── capa-hospital-er.jpg
        │   └── capa-petshop.jpg
        └── engenharia-de-software/
            ├── seminario-armazenamento-nvme.pptx
            └── capa-seminario.jpg
```

A organização segue uma regra simples: **os arquivos que formam o site ficam na raiz**, e **os arquivos que pertencem a cada projeto ficam dentro de `projetos/`**, separados primeiro por tipo (pessoal ou acadêmico) e depois por projeto ou disciplina. Assim, quem abre o repositório encontra rapidamente tanto o código do site quanto o material de cada trabalho.

---

## Arquivos da raiz

Ficam na raiz porque o GitHub Pages publica o site a partir dela: o `index.html` precisa estar nesse local para ser aberto automaticamente como página inicial.

| Arquivo | Localização | O que contém | Por que é necessário |
|---|---|---|---|
| `index.html` | `/index.html` | A estrutura da página: menu de navegação, apresentação (início), "Sobre mim", área de projetos com os filtros, habilidades, contato e rodapé. | É a página principal do site. Sem ele não existe site: é o arquivo que o navegador e o GitHub Pages abrem primeiro. Ele também carrega o `style.css` e o `script.js`. |
| `style.css` | `/style.css` | Todo o visual do site: cores, fontes, espaçamentos, layout dos cards de projeto, tema claro/escuro e adaptação para celular. | Separa a aparência do conteúdo. Assim é possível mudar o design sem mexer no texto e manter um estilo único em todas as seções. |
| `script.js` | `/script.js` | A **lista de todos os projetos** (título, descrição, disciplina, datas, destaques, tecnologias e links) e o código que monta os cards na tela, faz os filtros "Todos / Pessoais / Acadêmicos" funcionarem, alterna o tema claro/escuro e abre o menu no celular. | Centraliza as informações dos projetos em um só lugar. Para adicionar ou editar um projeto basta mexer nessa lista, sem duplicar HTML. Também é responsável por toda a interatividade da página. |
| `README.md` | `/README.md` | Este documento: apresentação do projeto e explicação da estrutura do repositório. | É exibido automaticamente pelo GitHub na página do repositório e serve de guia para professores, colegas e visitantes entenderem o projeto. |
| `.gitignore` | `/.gitignore` | Lista de arquivos que o Git não deve enviar: `.DS_Store` (arquivo de sistema do macOS) e `.claude/` (configurações locais da ferramenta de IA usada no desenvolvimento). | Mantém o repositório limpo, contendo apenas os arquivos que fazem parte do projeto, sem arquivos pessoais ou gerados automaticamente pelo computador. |

---

## Pasta `projetos/`

**Localização:** `/projetos/`

Guarda o material de cada projeto apresentado no site: código-fonte, documentos, diagramas e imagens de capa. Os cards do site apontam para esses arquivos, então o visitante pode abrir o código ou o documento original de cada trabalho com um clique.

Ela é dividida em duas subpastas, que correspondem às duas categorias do filtro de projetos do site.

### `projetos/pessoais/`

**Localização:** `/projetos/pessoais/`

Projetos feitos por iniciativa própria, fora das disciplinas. Cada projeto tem sua própria pasta.

#### `projetos/pessoais/depart-arq/` — Site de escritório de arquitetura

| Arquivo | O que contém | Por que está aqui |
|---|---|---|
| `capa.jpg` | Imagem de um dos projetos de interiores apresentados no site Depart Arq. | É a imagem de capa do card do projeto no portfólio. |
| `planta-ap106.jpg` | Planta isométrica do projeto "AP 106" do escritório. | Imagem complementar do projeto, guardada para uso futuro. **No momento ela não aparece no site.** |

> O código-fonte deste projeto não está neste repositório porque foi um trabalho em equipe hospedado em um repositório próprio. Por isso, apenas as imagens usadas no portfólio foram incluídas.

#### `projetos/pessoais/automacao-siconv/` — Automação de dados do SICONV

| Arquivo | O que contém | Por que está aqui |
|---|---|---|
| `main.py` | Script em Python que acessa o Portal de Dados Abertos do governo, baixa e descompacta a base de convênios, filtra as linhas e colunas de interesse com Pandas e salva o resultado. | É o código-fonte do projeto. O card no site tem o link "Código", que abre este arquivo. |
| `planilha_filtrada.csv` | Planilha gerada pelo script, com os convênios filtrados e a data/hora da atualização. | Mostra o resultado real do script. O card no site tem o link "Planilha gerada", que abre este arquivo. |

#### `projetos/pessoais/curso-python/` — Exercícios de um curso de Python

| Arquivo | O que contém | Por que está aqui |
|---|---|---|
| `aula_1.py` | Jogo de adivinhação no terminal (laços, condicionais e entrada do usuário). | Código do primeiro exercício. É aberto pelo link "Jogo de adivinhação" no card. |
| `teste_leitura.py` | Script que lê tabelas HTML e as transforma em tabelas do Pandas. | Código do exercício de leitura de dados. É aberto pelo link "Leitura de dados" no card. |
| `capa-modelo-siconv.jpg` | Recorte do diagrama do banco de dados do SICONV estudado no curso. | É a imagem de capa do card do projeto. |

### `projetos/academicos/`

**Localização:** `/projetos/academicos/`

Trabalhos feitos para as disciplinas do curso de Engenharia de Software. Aqui as pastas são separadas **por disciplina**, seguindo a mesma divisão por matéria usada na seção "Projetos acadêmicos" do site.

> O projeto da disciplina **Lógica de Programação** não tem pasta neste repositório porque foi desenvolvido no Google Colab. O card no site leva direto para o notebook online.

#### `projetos/academicos/banco-de-dados/` — Disciplina de Banco de Dados

| Arquivo | O que contém | Por que está aqui |
|---|---|---|
| `Exercicio_Ifood_PedroImanichi.pdf` | Modelo conceitual de um aplicativo de delivery (estilo iFood), com 8 entidades e seus atributos. | Documento original entregue na disciplina. É aberto pelo link "Ver diagrama (PDF)". |
| `Exercicio_Hospital_PedroImanichi.pdf` | Modelo conceitual de um sistema hospitalar, com 19 entidades e seus atributos. | Documento original entregue na disciplina. É aberto pelo link "Ver diagrama (PDF)". |
| `Correcao_Aula05_PedroImanichi.pdf` | Versão corrigida do modelo hospitalar, agora com relacionamentos e cardinalidades (Modelo Entidade-Relacionamento). | Mostra a evolução do exercício anterior. É aberto pelo link "Ver diagrama (PDF)". |
| `modelo_petshop_PedroImanichi.png` | Modelo lógico de um pet shop feito no MySQL Workbench, com 5 tabelas, tipos de dados e chaves. | Arquivo original do exercício. É aberto pelo link "Ver modelo (PNG)". |
| `capa-ifood.jpg` | Recorte do diagrama do iFood. | Imagem de capa do card do projeto. |
| `capa-hospital-conceitual.jpg` | Recorte do modelo conceitual do hospital. | Imagem de capa do card do projeto. |
| `capa-hospital-er.jpg` | Recorte do modelo ER do hospital. | Imagem de capa do card do projeto. |
| `capa-petshop.jpg` | Recorte do modelo lógico do pet shop. | Imagem de capa do card do projeto. |

#### `projetos/academicos/engenharia-de-software/` — Disciplina de Engenharia de Software

| Arquivo | O que contém | Por que está aqui |
|---|---|---|
| `seminario-armazenamento-nvme.pptx` | Slides do micro-seminário em grupo "A Evolução dos Dispositivos de Armazenamento", sobre o impacto dos SSDs NVMe na velocidade de execução. | Material original apresentado na disciplina. É baixado pelo link "Baixar slides (.pptx)". |
| `capa-seminario.jpg` | Imagem do slide de título da apresentação. | Imagem de capa do card do projeto. |

### Por que as imagens de capa são arquivos separados?

Os documentos originais (PDFs, slides e imagens grandes) não podem ser exibidos diretamente como miniatura no site, ou seriam pesados demais para carregar. Por isso, cada projeto tem uma imagem `capa-*.jpg` pequena e otimizada (entre 45 e 75 KB), feita a partir do próprio trabalho. Assim a página carrega rápido e o arquivo original continua disponível pelo link.

---

## Como os arquivos se conectam

```
index.html ──carrega──▶ style.css     (aparência)
     │
     └──────carrega──▶ script.js      (lista de projetos + interatividade)
                           │
                           └──aponta para──▶ projetos/...  (capas, códigos e documentos)
```

1. O navegador abre o **`index.html`**, que tem o conteúdo fixo da página.
2. O `index.html` carrega o **`style.css`**, que define o visual.
3. O `index.html` carrega o **`script.js`**, que lê a lista de projetos e monta os cards dentro da seção "Projetos".
4. Cada card usa uma **imagem de capa** e mostra **links** para os arquivos dentro de **`projetos/`**.

---

## Como adicionar um novo projeto

1. Crie uma pasta para o projeto dentro de `projetos/pessoais/` ou de `projetos/academicos/<disciplina>/`.
2. Coloque nela os arquivos do projeto e, se quiser, uma imagem de capa (`capa-nome.jpg`).
3. No `script.js`, adicione um novo item na lista `projetos`, informando o `tipo` (`"pessoal"` ou `"academico"`), a `disciplina` (para acadêmicos), a `capa` e os `links` apontando para os arquivos da pasta criada.
4. Se for uma disciplina nova, adicione o nome dela na lista `disciplinas` do `script.js`, que define a ordem das matérias no site.


**Tecnologias utilizadas:** HTML5, CSS3, JavaScript (sem frameworks), Google Fonts (Inter e JetBrains Mono) e GitHub Pages para hospedagem.
