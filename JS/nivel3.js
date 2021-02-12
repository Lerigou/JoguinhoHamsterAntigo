function resposta() {

    a = document.getElementById('q1').value
    b = document.getElementById('q2').value
    c = document.getElementById('q3').value


    if (a == "74") {
        alert("Questão 1 correta")
    } else {
        alert("Questão 1 incorreta")
    }

    if (b == "30") {
        alert("Questão 2 correta")
    } else {
        alert("Questão 2 incorreta")
    }

    if (c == "100") {
        alert("Questão 3 correta")
    } else {
        alert("Questão 3 incorreta")
    }
    if (a == "74" && b == "30" && c == "100") {
        window.location.href = "sucessoN3.html"
    } else {
        window.location.href = "errou.html"
    }
}