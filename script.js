let erros = [] //Declara array de escopo global que irá conter os números já apostados

//Gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1

//Declara constante com o número de chances
const CHANCES = 6

function apostarNumero() {
  //Cria referência ao campo de entrada e obtem seu conteúdo
  let inNumero = document.getElementById('inNumero')
  let numero = Number(inNumero.value)

  //Valida o número
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert('Informe um número válido')
    inNumero.focus()
    return
  }
  //Referencia espaços das saídas de dados
  let outDica = document.getElementById('outDicas')
  let outErros = document.getElementById('outErros')
  let outChances = document.getElementById('outChances')

  //Se aposta do jogador for igual ao número sorteado
  if (numero == sorteado) {
    alert('Parabéns! Você acertou!!!')
    //Troca status dos botões
    btApostar.disabled = true
    btJogar.className = 'exibe'
    outDica.textContent = 'Parabéns!! Número sorteado: ' + sorteado
  }else{
    //Se número existe no array erros
    if (erros.indexOf(numero >= 0)) {
      alert('Você já apostou o número ' + numero + ' Tente outro...')
    }else{
      erros.push(numero) //Adiciona número ao array
      let numErros = erros.length //Obtem tamanho do array
      let numChances = CHANCES - numErros //Calcula n° de chances

      //Exibe n° de erros, conteúdo do array e n° de chances
      outErros.textContent = numErros + ' (' + erros.join(', ') + ')'
      outChances.textContent = numChances
      if(numChances == 0) {
        alert('Suas chances acabaram!')
        btApostar.disabled = true
        btJogar.className = 'exibe'
        outDica.textContent = 'Game over! Número sorteado: ' + sorteado
      }else{
        //Usa operador ternário (condicional) para mensagem da dica
        let dica = numero < sorteado ? 'maior' : 'menor'
        outDica.textContent = 'Dica: tente um número' + dica + ' que ' + numero
      }
    }
  }
  //Limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = ''
  inNumero.focus()
}
let btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)

