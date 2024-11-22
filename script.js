document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os passos e botões
    const passos = document.querySelectorAll(".passo");
    const botoesProximo = document.querySelectorAll(".btn-proximo");

    // Função para alternar entre os passos
    function mostrarPasso(id) {
        // Remove a classe ativa de todos os passos
        passos.forEach(passo => passo.classList.remove("ativo"));

        // Adiciona a classe ativa ao passo correspondente
        const passoAtual = document.getElementById(`passo-${id}`);
        if (passoAtual) {
            passoAtual.classList.add("ativo");
        }
    }

    // Adiciona os eventos de clique a todos os botões
    botoesProximo.forEach(botao => {
        botao.addEventListener("click", () => {
            const proximoId = botao.getAttribute("data-proximo");
            mostrarPasso(proximoId);
        });
    });
});
