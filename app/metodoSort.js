let btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', ordernarLivros);

function ordernarLivros(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}