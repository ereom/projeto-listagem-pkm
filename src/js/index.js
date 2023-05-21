const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (darkModeOn) {
    imgBotaoTrocaTema.setAttribute("src","./src/imagens/sun.png");
    } else {
    imgBotaoTrocaTema.setAttribute("src","./src/imagens/moon.png");
}  
});
