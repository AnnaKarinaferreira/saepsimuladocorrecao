function redirecionar() {
    if (document.getElementById('estudante').checked) {
        window.location.href = "estudante.html";
    }  else if (document.getElementById('biblio').checked) {
        window.location.href = "biblio.html";
    } else{
        alert("Por favor, selecione uma opção.")
    }
}

// script para os botoes da bibliotecaria
// Referenciando o botão pelo ID
var button4 = document.getElementById("button4");
// Adicionando  clique ao botão
button1.addEventListener("click", function () {
  // Redirecionando
  window.location.href = "login.html";
});
