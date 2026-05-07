// O número de telefone e a exibição estão codificados em Base64 para proteção
// A função atob() descriptografa esses códigos em tempo real no navegador
// Criptografado para o número: 5551981962819
const telefoneWhats = atob("NTU1MTk4MTk2MjgxOQ==");
// Criptografado para exibir: (51) 98196-2819
const textoExibicao = atob("KDUxKSA5ODE5Ni0yODE5");

// Função para exibir o telefone no topo da página
function configurarExibicaoContato() {
    const el = document.getElementById("display-fone");
    if (el) {
        el.innerHTML = `📞 Fone / WhatsApp: ${textoExibicao}`;
    }
}

// Executa a função assim que carrega
configurarExibicaoContato();

// Função para gerar link do WhatsApp
function gerarLinkWhats(nomeServico, valorTexto) {
    const mensagem = `Olá, gostaria de solicitar o serviço: *${nomeServico}* - Valor: ${valorTexto}. Poderia confirmar disponibilidade?`;
    const msgEncoded = encodeURIComponent(mensagem);
    return `https://wa.me/${telefoneWhats}?text=${msgEncoded}`;
}

// Dados: COMPUTADORES E NOTEBOOKS
// Substitua o link da imagem pelo arquivo da sua foto, ex: "minha-foto.jpg"
const computadores = [
    { nome: "FORMATAÇÃO + BACKUP", preco: 150, imagem:"img/fomartacao_backup.jpeg"},
    { nome: "TROCA DE TELA DE NOTEBOOK", preco: 250, imagem: "img/troca_tela_notebook.jpeg"},
    { nome: "LIMPEZA INTERNA E PASTA TÉRMICA", preco: 120, imagem: "img/limpeza_interna_e_Pasta_terminca.jpeg"},
    { nome: "UPGRADE PARA SSD", preco: 180, imagem: "img/upgrade_ssd.jpeg" },
    { nome: "REPARO DE PLACA MÃE", preco: 350, imagem: "img/reparao_de_placa_mae.jpeg"},
    { nome: "TROCA DE TECLADO", preco: 180, imagem: "img/troca_de_teclado.jpeg" }
];

// Dados: IMPRESSORAS
const impressoras = [
    { nome: "DESENTUPIMENTO DE CABEÇA", preco: 150, imagem: "img/desentupimento_de_cabeça.jpeg"},
    { nome: "RESET DE ALMOFADAS", preco: 100, imagem: "img/resete_das_almofadas.jpeg"},
    { nome: "REPARO NO TRACIONADOR DE PAPEL", preco: 130, imagem: "img/tracionador_de_papel.jpeg"},
    { nome: "MANUTENÇÃO PREVENTIVA", preco: 120, imagem: "img/manutencao_preventiva.jpeg"}
];

// Dados: SOFTWARE E REDES
const softwareRedes = [
   { nome: "INSTALAÇÃO PACOTE OFFICE", preco: 80, imagem: "img/instalacao_pacote_office.jpeg"},
    { nome: "REMOÇÃO DE VÍRUS / MALWARE", preco: 100, imagem: "img/remocao_de_virus.jpeg"},
    { nome: "RECUPERAÇÃO DE DADOS", preco: 300, imagem: "img/recuperacao_de_dados.jpeg"},
];
// PLANOS PARA EMPRESAS (faixa)
const empresasPlanos = [
    { nome: "CONTRATO MANUTENÇÃO MENSAL", faixa: "R$400 a R$900", precoMin: 400, precoMax: 900, imagem: "img/manutencao_mensal.jpeg"}
];

// Renderiza cards com preço fixo e imagem
function renderizarGrid(containerId, arrayItens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    arrayItens.forEach(item => {
        const precoFormatado = `R$ ${item.preco.toFixed(2)}`.replace('.', ',');
        const link = gerarLinkWhats(item.nome, precoFormatado);
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="card-image">
            <div class="card-content">
                <div class="badge-fixo">🔧 serviço técnico</div>
                <div class="service-name">${item.nome}</div>
                <div class="service-price">${precoFormatado}</div>
            </div>
            <a href="${link}" target="_blank" class="btn-wa">
                📲 Solicitar via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.445.099-.133.197-.513.644-.63.776-.116.132-.232.148-.43.05-.197-.1-.834-.308-1.59-.984-.59-.525-.986-1.175-1.102-1.372-.116-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.474-.16-.39-.323-.337-.445-.343a8 8 0 0 0-.38-.006c-.132 0-.347.05-.53.248-.181.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.049.099.132 1.394 2.132 3.383 2.99.472.204.84.326 1.129.417.474.15.906.128 1.248.077.38-.056 1.17-.478 1.335-.94.165-.462.165-.858.116-.94-.05-.083-.182-.132-.38-.23z"/>
                </svg>
            </a>
        `;
        container.appendChild(card);
    });
}

// Render específico para os planos de empresas (faixa de valores) com imagem
function renderizarEmpresas(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    empresasPlanos.forEach(item => {
        const link = gerarLinkWhats(item.nome, `faixa de ${item.faixa}`);
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="card-image">
            <div class="card-content">
                <div class="badge-fixo">💼 atendimento B2B</div>
                <div class="service-name">${item.nome}</div>
                <div class="service-price price-range">💰 ${item.faixa}</div>
            </div>
            <a href="${link}" target="_blank" class="btn-wa">
                📲 Orçamento via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.445.099-.133.197-.513.644-.63.776-.116.132-.232.148-.43.05-.197-.1-.834-.308-1.59-.984-.59-.525-.986-1.175-1.102-1.372-.116-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.474-.16-.39-.323-.337-.445-.343a8 8 0 0 0-.38-.006c-.132 0-.347.05-.53.248-.181.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.049.099.132 1.394 2.132 3.383 2.99.472.204.84.326 1.129.417.474.15.906.128 1.248.077.38-.056 1.17-.478 1.335-.94.165-.462.165-.858.116-.94-.05-.083-.182-.132-.38-.23z"/>
                </svg>
            </a>
        `;
        container.appendChild(card);
    });
}

// Inicialização
renderizarGrid("computadores-grid", computadores);
renderizarGrid("impressoras-grid", impressoras);
renderizarGrid("software-grid", softwareRedes);
renderizarEmpresas("empresas-grid");
