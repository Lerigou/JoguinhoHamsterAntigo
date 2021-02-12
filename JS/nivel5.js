function resposta() {

    a = document.getElementById('q1').value
    b = document.getElementById('q2').value
    c = document.getElementById('q3').value


    if (a == "1338") {
        alert("Questão 1 correta")
    } else {
        alert("Questão 1 incorreta")
    }

    if (b == "0") {
        alert("Questão 2 correta")
    } else {
        alert("Questão 2 incorreta")
    }

    if (c == "7826") {
        alert("Questão 3 correta")
    } else {
        alert("Questão 3 incorreta")
    }
    if (a == "1338" && b == "0" && c == "7826") {
        window.location.href = "sucessoN5.html"
    } else {
        window.location.href = "errou.html"
    }
}