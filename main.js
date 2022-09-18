


function calculo(){

  var nome = document.getElementById('nomeAluno').value;
  var notaDoPrimeiroBimestre = parseFloat(document.getElementById('primeiroBimestre').value);
  var notaDoSegundoBimestre = parseFloat(document.getElementById('segundoBimestre').value);
  var notaDoTerceiroBimestre = parseFloat(document.getElementById('terceiroBimestre').value);
  var notaDoQuartoBimestre  = parseFloat(document.getElementById('quartoBimestre').value);


  var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre;

  var notaFinal = somaDasNotas / 4;

  var notaFixada = notaFinal.toFixed(2)

  if (notaFinal >= 6){
    
    document.getElementById('resultado').innerHTML = "Sua média foi <p> " + notaFinal + "! <p>Parabéns " + nome + " <p>você foi aprovado!"

  }                                                                 
  else{
    document.getElementById('resultado').innerHTML = "Sua média foi <p> " + notaFinal + "!<p> Infelizmente  você <p>foi reprovado! <p> " + nome;
  }

  console.log("Bem vindo " + nome)
  console.log("Sua média é: " + notaFixada)

  if (notaFinal >= 6){
  console.log("Parabéns " + nome + " você foi aprovado!")
  }
  else{
  console.log("Infelizmente " + nome + " você foi reprovado, não desanime!")
  }

}




// isso é um comentário

//Revisão
//Variáveis, Strings, Console.log, toFixed,operações matemáticas, concatenação 