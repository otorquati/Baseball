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
  // preenche placar
  let c=''
  let a=[]
  for( let pos=0; pos<=sdados.length-1;pos++){
    // alert(`c= ${c}`)
    if (sdados[pos]!==','){
      c+=sdados[pos]
    } else {
      a.push(c)
      c=''
    }
  }
  a.push(c)
  sdados=a 
  // alert(`registro = ${sdados}`)
  if (n>0) {
    for (let pos=0;pos<=sdados.length-1;pos++){
      //alert(`pos = ${pos}`)
      s=(sdados[pos]);
      s=(s>=0 && s<=9)?Number(s):s;
      c=registro.length
      switch (s){
        case '+':
          s=Number(registro[c-1])+Number(registro[c-2])
          //registro.push(s)
          break
        case 'D':
            s=(Number(registro[c-1])*2)
            break
        case 'C':
            registro.pop()
        }
        if(!isNaN(s)){
          registro.push(s)
        }
              //alert(`comprimento de placar = ${c}`)
              //alert(`O placar atual é ${registro}`)
        }
        for(let i=0; i<=registro.length-1; i++){
          soma+=Number(registro[i])
        }
    analise.innerHTML = `<p>Análise do Placar</p>`
    analise.innerHTML += `<p> Placar registrado ${registro}</p>`
    analise.innerHTML += `<p> o score atual é = ${soma}</p>`
  } else {
    alert(`Adicione valores`)
    analise.innerHTML='<p> O resultado da análise aparecerá aqui!'
  }
}
