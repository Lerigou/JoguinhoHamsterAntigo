function resposta() {

    a = document.getElementById('q1').value
    b = document.getElementById('q2').value
    c = document.getElementById('q3').value


    if (a == "4") {
        alert("Questão 1 correta")
    } else {
        alert("Questão 1 incorreta")
    }

    if (b == "8") {
        alert("Questão 2 correta")
    } else {
        alert("Questão 2 incorreta")
    }

    if (c == "7") {
        alert("Questão 3 correta")
    } else {
        alert("Questão 3 incorreta")
    }
    if ( a == "4" && b == "8" && c == "7"){
        window.location.href = "sucessoN1.html"
    } else {
        window.location.href = "errou.html"
    }
}