function redirecionar() {
    if (document.getElementById('estudante').checked) {
        window.location.href = "estudante.html";
    }  else if (document.getElementById('biblio').checked) {
        window.location.href = "biblio.html";
    } else{
        alert("Por favor, selecione uma opção.")
    }
}