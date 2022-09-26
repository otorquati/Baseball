/* Funções do Analisador de Placar */
var analise = document.getElementById('analise')
var sdados=''
function Analisar(){
  let dados = document.getElementById('ops')
  let registro=[]
  let soma = 0
  let sdados = (dados.value)
  let n=sdados.length
  let analise = document.getElementById('analise')
  // alert(`sdados length = ${n}`)
  // preenche placar
  if (n>0) {
    for (let pos=0;pos<=sdados.length-1;pos++){
      alert(`pos = ${pos}`)
      s=(sdados[pos]);
      s= (s>=0 && s<=9)?Number(s):s;
      if (s!==",") {
      alert(`s = ${s} ${typeof s}`)
       if (!isNaN(s) && isFinite(s)){
          alert(`Registrando`)
          registro.push(s)
        }
        if (typeof s=='string'){
          alert(`Atualizando`)
          if (s=='D'){
            soma+=(Number(registro[c-1])*2);
          } else if (s=='C')
          {
            registro.pop(); // remove o último elemento da matriz
          } else {
            soma+=registro[c-1]
            //placar.push(s)
          }
        }
        c = registro.length
        alert(`comprimento de placar = ${c}`)
      }
    
      alert(`O placar atual é ${registro} e a soma atual é ${soma}`)
    }
    analise.innerHTML = `<p>Análise do Placar</p>`
    analise.innerHTML += `<p> Placar registrado ${registro}</p>`
    analise.innerHTML += `<p> o score atual é = ${soma}</p>`
  } else {
    alert(`Adicione valores`)
    analise.innerHTML='<p> O resultado da análise aparecerá aqui!'
  }
}