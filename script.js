let student = prompt("Qual é o nome do(a) aluno(a)?")
let n1 = prompt("Qual foi a nota da primeira prova?")
let n2 = prompt("Qual foi a nota da segunda prova?")
let n3 = prompt("Qual foi a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {

  alert("Reprovado")

} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average)
}
