function resposta() {

    a = document.getElementById('q1').value
    b = document.getElementById('q2').value
    c = document.getElementById('q3').value


    if (a == "-13") {
        alert("Questão 1 correta")
    } else {
        alert("Questão 1 incorreta")
    }

    if (b == "-14") {
        alert("Questão 2 correta")
    } else {
        alert("Questão 2 incorreta")
    }

    if (c == "-72") {
        alert("Questão 3 correta")
    } else {
        alert("Questão 3 incorreta")
    }
    if (a == "-13" && b == "-14" && c == "-72") {
        window.location.href = "sucessoN2.html"
    } else {
        window.location.href = "errou.html"
    }
}