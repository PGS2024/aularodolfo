nota1 = parseInt(prompt("informar o valor da nota" ))
nota2 = parseInt(prompt("informar o valor da nota" ))
nota3 = parseInt(prompt("informar o valor da nota" ))
nota4 = parseInt(prompt("informar o valor da nota" ))
media = (nota1 + nota2 + nota3 + nota4)/4

if (media>=6) {
    document.write ("Aprovado")
    
}

else{
    document.write("Reprovado")
}